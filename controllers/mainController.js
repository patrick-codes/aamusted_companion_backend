//@added asyncHandler to handle the async errors
//without neccesary writing a Throw Catch Function
const asyncHandler = require("express-async-handler");
const halldetails = require("../models/detailsModel");

module.exports = {
  getDetails: asyncHandler(async (req, res) => {
    const details = await halldetails.find();
    res.status(200).json(details);
  }),

  getSingleDetails: asyncHandler(async (req, res) => {
    const details = await halldetails.findById(req.params.id);

    if (!details) {
      res.status(404);
      throw new Error("Details Not Found");
    }
    res.status(200).json(details);
  }),

  postDetails: asyncHandler(async (req, res) => {
    //console.log(req.body);
    const { name, date, residencetype } = req.body;
    if (!name || !date || !residencetype) {
      res.status(400);
      throw new Error("All fields are mandatory");
    }
    const details = await halldetails.create({
      name,
      date,
      residencetype,
    });
    res.status(200).json(details);
  }),

  updateDetails: asyncHandler(async (req, res) => {
    const details = await halldetails.findById(req.params.id);
    if (!details) {
      res.status(404);
      throw new Error("Details Not Found");
    }
    const updatedDetails = await halldetails.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedDetails);
  }),

  deleteDetails: asyncHandler(async (req, res) => {
    const details = await halldetails.findById(req.params.id);
    if (!details) {
      res.status(404);
      throw new Error("Details Not Found");
    }
    await halldetails.deleteOne();
    res.status(200).json(details);
  }),

  newInfo: asyncHandler(async (req, res) => {
    res.status(200).json({ 
      id: "345",
      name: "Boateng Patrick",
      department: "ITE",
      level: "300",
      message: "Infomation Succesfully Fetched" });
  }),
};
