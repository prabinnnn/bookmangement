const usermodel = require("./user.model");
const create = (payload) => {
  return usermodel.create(payload);
};
const get = () => {
  return usermodel.find();
};
const getById = (id) => {
  return usermodel.findOne(id);
};
const updateById = (id, payload) => {
  return usermodel.updateOne(id, payload);
};
const removeByid = (id) => {
  return usermodel.deleteOne(id);
};
module.exports = { create, get, getById, updateById, removeByid };
