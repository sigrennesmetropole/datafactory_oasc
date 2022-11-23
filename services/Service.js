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
    var hostname = config.URL_PATH+':'+config.URL_PORT+"/";
    var returnObject = { "@iot.count" : totalItems, "value": values}
    if(currentPage + 1 < totalItems) {
      returnObject["@iot.nextLink"] = hostname+endpoint+`?page=${currentPage+1}&size=${limit}`
    }
    return returnObject;
  };

  static getParameterGet(page = 0, size = 10, filter ="", select, expand){
    var condition = JSON.parse('{'+filter+'}');
    const { limit, offset } = Service.getPagination(page, size);
    var findJson = {  limit, offset }
    if(filter != ""){
      findJson.where = condition
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
    return new Promise((resolve,reject) => { 
      if(entityId == undefined){
        reject(Service.rejectResponse({
          message: "id is mandatory"
        }), 400);
      }
      const {findJson , limit} = Service.getParameterGet( 0, 1, "", select, expand)
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
    return new Promise((resolve,reject) => { 
      const {findJson , limit} = Service.getParameterGet( page, size, filter, select, expand)
      service.findAndCountAll(findJson)
      .then(data => {
        var response = Service.getPagingData(data, page, limit, config, endpoint);
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
