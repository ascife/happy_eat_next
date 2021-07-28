const util = {};

util.mapObject = function(object, callback) {

  if(typeof object !== "object")
    return null;

  if(Array.isArray(object))
    return object.map(callback);


  return Object.keys(object).reverse().map((key)=> {
    let value = object[key];
    return callback(key, value);
  })
}

export default util;