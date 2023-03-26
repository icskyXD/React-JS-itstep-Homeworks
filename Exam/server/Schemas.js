const { Schema } = require("mongoose");

const ReactProductScheme = new Schema({
    product_name: String,
    sell_price: Number,
    buy_price: Number,
    product_amount: Number,
})

const ReactMoneyAmount = new Schema({
    money_amount: Number
})

const ReactActionScheme = new Schema({
    type: String,
    name: String,
    date: {
        type: Date,
        default: Date.now
    },
    product_amount: {
        type: Number,
        default: 0
    },
    summary:{
        type: Number,
        default: 0
    }

})

module.exports = {
    ReactProductScheme,
    ReactMoneyAmount,
    ReactActionScheme
};