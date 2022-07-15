const mongooseToObject = {};

mongooseToObject.multiToObject = (list) => list.map((ele) => ele.toObject());

mongooseToObject.singleToObject = (ele) => (ele[0] ? ele[0].toObject() : ele);

module.exports = mongooseToObject;
