const mongoose = require("mongoose");

module.exports = {
  dbConn: async (req, res, next) => {
    try {
      const connect = await mongoose.connect(process.env.CONNECTION_STRING);
      console.log(
        "Database Connected Succesfully to: ",
        connect.connection.host,
        connect.connection.name
      );
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  },
};
