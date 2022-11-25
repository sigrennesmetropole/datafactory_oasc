class Hooks{
    static hookObservations(observations, config){
        if(!!observations){
            if (!Array.isArray(observations)) observations = [observations];
            for (const instance of observations) {
                var hostname = config.URL_PATH+':'+config.URL_PORT + "/v1.1";
                var id = instance.dataValues.id;
                if(!!id){
                    instance.dataValues["@iot.selfLink"] = hostname+'/Observations/'+id;
                    instance.dataValues["FeatureOfInterest@iot.navigationLink"] = hostname+'/Observations/'+id+'/FeatureOfInterest';
                    instance.dataValues["Datastream@iot.navigationLink"] = hostname+'/Observations/'+id+'/Datastream';
                    instance.dataValues["@iot.id"] = id;
                }
                delete instance.dataValues.id;
                delete instance.dataValues.datastreamId;
                delete instance.dataValues.featureId;

                Hooks.hookDatastream(instance.dataValues.datastream, config);
                Hooks.hookFeatures(instance.dataValues.feature, config);
            }
        }
    }

    static hookThing(thing, config){
        if(!!thing){
            if (!Array.isArray(thing)) thing = [thing];
            for (const instance of thing) {
                var hostname = config.URL_PATH+':'+config.URL_PORT + "/v1.1";
                var id = instance.dataValues.id;
                if(!!id){
                    instance.dataValues["@iot.selfLink"] = hostname+'/Things/'+id;
                    instance.dataValues["Datastreams@iot.navigationLink"] = hostname+'/Things/'+id+'/Datastreams';
                    instance.dataValues["Locations@iot.navigationLink"] = hostname+'/Things/'+id+'/Locations';
                    instance.dataValues["HistoricalLocations@iot.navigationLink"] = hostname+'/Things/'+id+'/HistoricalLocations';
                    instance.dataValues["@iot.id"] = id;
                }
                delete instance.dataValues.id;

                Hooks.hookDatastream(instance.dataValues.datastreams, config);
                Hooks.hookLocations(instance.dataValues.locations, config);
                Hooks.hookHistLocations(instance.dataValues.histLocations, config);
            }
        }
    }

    static hookSensor(sensor, config){
        if(!!sensor){
            if (!Array.isArray(sensor)) sensor = [sensor];
            for (const instance of sensor) {
                var hostname = config.URL_PATH+':'+config.URL_PORT + "/v1.1";
                var id = instance.dataValues.id;
                if(!!id){
                    instance.dataValues["@iot.selfLink"] = hostname+'/Sensors/'+id;
                    instance.dataValues["Datastreams@iot.navigationLink"] = hostname+'/Sensors/'+id+'/Datastreams';
                    instance.dataValues["@iot.id"] = id;
                }
                delete instance.dataValues.id;

                Hooks.hookDatastream(instance.dataValues.datastreams, config);
            }
        }
    }

    static hookObsPropperties(obsProperties, config){
        if(!!obsProperties){
            if (!Array.isArray(obsProperties)) obsProperties = [obsProperties];
            for (const instance of obsProperties) {
                var hostname = config.URL_PATH+':'+config.URL_PORT + "/v1.1";
                var id = instance.dataValues.id;
                if(!!id){
                    instance.dataValues["@iot.selfLink"] = hostname+'/ObservedProperties/'+id;
                    instance.dataValues["Datastreams@iot.navigationLink"] = hostname+'/ObservedProperties/'+id+'/Datastreams';
                    instance.dataValues["@iot.id"] = id;
                }
                delete instance.dataValues.id;

                Hooks.hookDatastream(instance.dataValues.datastreams, config);
            }
        }
    }

    static hookFeatures(feature, config){
        if(!!feature){
            if (!Array.isArray(feature)) feature = [feature];
            for (const instance of feature) {
                var hostname = config.URL_PATH+':'+config.URL_PORT + "/v1.1";
                var id = instance.dataValues.id;
                if(!!id){
                    instance.dataValues["@iot.selfLink"] = hostname+'/FeatureOfInterest/'+id;
                    instance.dataValues["Observations@iot.navigationLink"] = hostname+'/FeatureOfInterest/'+id+'/Observations';
                    instance.dataValues["@iot.id"] = id;
                }
                delete instance.dataValues.id;

                Hooks.hookObservations(instance.dataValues.observations, config);
            }
        }
    }

    static hookHistLocations(histLocations, config){
        if(!!histLocations){
            if (!Array.isArray(histLocations)) histLocations = [histLocations];
            for (const instance of histLocations) {
                var hostname = config.URL_PATH+':'+config.URL_PORT + "/v1.1";
                var id = instance.dataValues.id;
                if(!!id){
                    instance.dataValues["@iot.selfLink"] = hostname+'/HistoricalLocations/'+id;
                    instance.dataValues["Locations@iot.navigationLink"] = hostname+'/HistoricalLocations/'+id+'/Locations';
                    instance.dataValues["Thing@iot.navigationLink"] = hostname+'/HistoricalLocations/'+id+'/Thing';
                    instance.dataValues["@iot.id"] = id;
                }
                delete instance.dataValues.id;
                delete instance.dataValues.thingId;
                delete instance.dataValues.locationsHistLocations;

                Hooks.hookLocations(instance.dataValues.locations, config);
                Hooks.hookThing(instance.dataValues.thing, config);
            }
        }
    }

    static hookLocations(locations, config){
        if(!!locations){
            if (!Array.isArray(locations)) locations = [locations];
            for (const instance of locations) {
                var hostname = config.URL_PATH+':'+config.URL_PORT + "/v1.1";
                var id = instance.dataValues.id;
                if(!!id){
                    instance.dataValues["@iot.selfLink"] = hostname+'/Locations/'+id;
                    instance.dataValues["HistoricalLocations@iot.navigationLink"] = hostname+'/Locations/'+id+'/HistoricalLocations';
                    instance.dataValues["Thing@iot.navigationLink"] = hostname+'/Locations/'+id+'/Things';
                    instance.dataValues["@iot.id"] = id;
                }
                delete instance.dataValues.id;
                delete instance.dataValues.genFoiId;
                delete instance.dataValues.thingsLocations;
                delete instance.dataValues.locationsHistLocations;

                Hooks.hookHistLocations(instance.dataValues.histLocation, config);
                Hooks.hookThing(instance.dataValues.thing, config);
            }
        }
    }

    static hookDatastream(datastream, config){
        if(!!datastream){
            if (!Array.isArray(datastream)) datastream = [datastream];
            for (const instance of datastream) {
                // To prevent mistakes:
                var hostname = config.URL_PATH+':'+config.URL_PORT + "/v1.1";
                var id = instance.dataValues.id;
                if(!!id){
                    instance.dataValues["@iot.selfLink"] = hostname+'/Datastreams/'+id;
                    instance.dataValues["Thing@iot.navigationLink"] = hostname+'/Datastreams/'+id+'/Thing';
                    instance.dataValues["Sensor@iot.navigationLink"] = hostname+'/Datastreams/'+id+'/Sensor';
                    instance.dataValues["ObservedProperty@iot.navigationLink"] = hostname+'/Datastreams/'+id+'/ObservedProperty';
                    instance.dataValues["Observations@iot.navigationLink"] = hostname+'/Datastreams/'+id+'/Observations';
                    instance.dataValues["@iot.id"] = id;
                }
                delete instance.dataValues.id;
                delete instance.dataValues.sensorId;
                delete instance.dataValues.obsPropertyId;
                delete instance.dataValues.lastFoiId;
                delete instance.dataValues.thingId;
                Hooks.hookObservations(instance.dataValues.observations, config);
                Hooks.hookThing(instance.dataValues.thing, config);
                Hooks.hookSensor(instance.dataValues.sensor, config);
                Hooks.hookObsPropperties(instance.dataValues.obsProperty, config);
              }
        }
    }
}
module.exports = Hooks;