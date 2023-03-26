const mongoose = require("mongoose");
const { ReactActionScheme, ReactProductScheme, ReactMoneyAmount } = require("./Schemas");

const ReactActionModel = mongoose.model("ReactAction", ReactActionScheme);
const ReactProductModel = mongoose.model("ReactProducts", ReactProductScheme);
const ReactMoneyAmountModel = mongoose.model("ReactMoneyAmount", ReactMoneyAmount)

module.exports = {
    ReactActionModel,
    ReactProductModel,
    ReactMoneyAmountModel
};