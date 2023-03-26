const express = require("express");
const { ReactProductModel, ReactActionModel, ReactMoneyAmountModel } = require("../Models");
const router = express.Router();

router.get("/", (req,res) => {
    ReactProductModel.find({}, (err, results) =>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(results)
        }
    })
})

router.post("/", async (req, res) => {
    const { product_name, sell_price, buy_price } = req.body;
    const newPost = new ReactProductModel({ product_name, sell_price, buy_price, product_amount: 0});
    newPost.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send("Product Added");
        }
    });
})


//Роутер покупки продукта + изменение банка
router.put("/buy/:id", async (req, res) => {
    const id = req.params.id;
    const moneyId = "641f4db8091580309f35ee9f"
    const {buyAmount, newBuyPice} = req.body;
    const updatedItem = await ReactProductModel.findById(id)
    const updatedBank = await ReactMoneyAmountModel.findById(moneyId)
    await ReactMoneyAmountModel.findByIdAndUpdate(moneyId, {money_amount: updatedBank.money_amount - (buyAmount * newBuyPice)})
    await ReactProductModel.findByIdAndUpdate(id,{product_amount: updatedItem.product_amount + buyAmount, buy_price: newBuyPice})
    const newBuyAction = new ReactActionModel({type: "buy", name: updatedItem.product_name, product_amount: buyAmount, summary: newBuyPice})
    newBuyAction.save((err) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send("Product bought")
        }
    })
})

router.put("/sell/:id", async (req, res) => {
    const id = req.params.id;
    const cashId = "641f4db8091580309f35ee9f"
    const {sellAmount, newSellPrice} = req.body;
    const updatedItem = await ReactProductModel.findById(id)
    const updatedBank = await ReactMoneyAmountModel.findById(cashId)
    await ReactMoneyAmountModel.findByIdAndUpdate(cashId, {cash_amount: updatedBank.cash_amount + (sellAmount * newSellPrice)})
    await ReactProductModel.findByIdAndUpdate(id,{product_amount: updatedItem.product_amount - sellAmount, sell_price: newSellPrice})
    const newBuyAction = new ReactActionModel({type: "sell", name: updatedItem.product_name, product_amount: sellAmount, summary: newSellPrice})
    newBuyAction.save((err) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send("Product sold")
        }
    })
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const deletedItem = await ReactProductModel.findById(id)
    const newAction = new ReactActionModel({type: "delete", name: deletedItem.product_name, product_amount: 0, summary: 0})
    newAction.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            ReactProductModel.findByIdAndDelete(id, (err) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send("Product Deleted");
                }
            });
        }
    })
})

module.exports = router;