const mongoose = require("mongoose");

module.exports = {
  dbConn: async (req, res, next) => {
    try {
      const connect = await mongoose.connect('mongodb+srv://kofiktechgh:aTM2hoBXnXmvrO7y@cluster0.eqem2es.mongodb.net/aamusted_companion_backend?retryWrites=true&w=majority');
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
