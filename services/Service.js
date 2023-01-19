const { Expression } = require('sequelize-expression');
//https://www.npmjs.com/package/sequelize-expression for syntax
const { Op } = require('sequelize');

class Service {
  static rejectResponse(error, code = 500) {
    return { error, code };
  }

  static successResponse(payload, code = 200) {
    return { payload, code };
  }

  static getPagination(page, size) {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;
  
    return { limit, offset };
  };
  
  static getPagingData(data, page, limit, config, endpoint) {
    const { count: totalItems, rows: values } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
    var hostname = config.URL_PATH+ "/v1.1/";
    var returnObject = { "@iot.count" : totalItems, "value": values}
    if(currentPage + 1 < totalItems) {
      returnObject["@iot.nextLink"] = hostname+endpoint+`?page=${currentPage+1}&size=${limit}`
    }
    return returnObject;
  };

  static async getParameterGet(page = 0, size = 10, filter ="", select, expand, reject){
    const { limit, offset } = Service.getPagination(page, size);
    var findJson = {  limit, offset }
    if(filter != ""){
      const parser = new Expression({ op : Op });
      const result = await parser.parse(filter);
      if (!result.ok) {
        reject(Service.rejectResponse({
          "message": result.getErrors()
        }, 400));
      }
      const filters = result.getResult();
      findJson.where = filters
    }
    if(!!select){
      var selectArray = select.split(",");
      findJson['attributes'] = selectArray;
    }
    if(!!expand){
      var expandFields = expand.split(",");
      expandFields = expandFields.map(element => {
        return element.trim();
      });
      findJson.include = expandFields;
    }

    return {findJson, limit}
  }

  static findById(entityId, service, name, select, op, expand){
    return new Promise(async (resolve,reject) => { 
      if(entityId == undefined){
        reject(Service.rejectResponse({
          message: "id is mandatory"
        }), 400);
      }
      const {findJson , limit} = await Service.getParameterGet( 0, 1, "", select, expand, reject)
      findJson.where = { "ID": { [op.eq]: entityId } };
      findJson.hooks = true;
      service.findAll(findJson)
      .then(data => {
        if(data.length === 0){
          reject(Service.rejectResponse({
            message:
            `${name} with id ${entityId} not found`
          }, 404));
        }else{
          const resultat = data[0];
          resolve(Service.successResponse(resultat));
        }
      })
      .catch(err => {
        reject(Service.rejectResponse({
          message:
            err.message || `Some error occurred while retrieving ${name}.`
        }));
      });
    })
  }

  static findAll(page, size, filter, select, expand, service, name, config, endpoint){
    return new Promise(async (resolve,reject) =>  {
      const {findJson , limit} =  await Service.getParameterGet( page, size, filter, select, expand, reject)
      service.findAndCountAll(findJson)
      .then(data => {
        var response = Service.getPagingData(data, page, limit, config, endpoint);
        if(!!response["@iot.nextLink"]){
          if(!!filter){
            response["@iot.nextLink"] += '&filter='+filter
          }
          if(!!select){
            response["@iot.nextLink"] += '&select='+select
          }
          if(!!expand){
            response["@iot.nextLink"] += '&expand='+expand
          }
        }
        resolve(Service.successResponse(response));
      })
      .catch(err => {
        reject(Service.rejectResponse({
          message:
            err.message || `Some error occurred while retrieving ${name}.`
        }));
      });
    })
  }
}

module.exports = Service;
