const bookcontroller = require("./book.model");
const create = (payload) => {
  return bookcontroller.create(payload);
};
const get = () => {
  return bookcontroller.find();
};
const getById = (id) => {
  return bookcontroller.findOne(id);
};
const updateById = (id, payload) => {
  return bookcontroller.updateOne(id, payload);
};
const remove = (id) => {
  return bookcontroller.deleteOne(id);
};
module.exports = { create, get, getById, updateById, remove };
