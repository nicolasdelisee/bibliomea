/* eslint-disable camelcase */
const database = require("../../config");

const findAll = () => {
  return database.query("SELECT * FROM user").then((res) => res);
};

// const findByType = (main_type) => {
//   return database
//     .query("SELECT * FROM user WHERE main_type = ?", [main_type])
//     .then(([res]) => res);
// };

module.exports = {
  findAll,
//   findByType,
};