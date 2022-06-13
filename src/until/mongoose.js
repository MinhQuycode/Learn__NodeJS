const convertArrToObject = (arrConvert) => {
  return arrConvert.map((object) => object.toObject());
};

const convertObject = (objectConvert) => {
  return objectConvert ? objectConvert.toObject() : objectConvert;
};

export { convertArrToObject, convertObject };
