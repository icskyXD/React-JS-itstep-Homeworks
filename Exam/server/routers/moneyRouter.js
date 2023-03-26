const express = require("express");
const { ReactMoneyAmountModel } = require("../Models");
const router = express.Router();

router.get("/", (req,res) => {
    ReactMoneyAmountModel.find({}, (err, results) =>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(results)
        }
    })
})

router.post("/", async (req, res) => {
    const { amount } = req.body;
    const newPost = new ReactMoneyAmountModel({ money_amount: amount });
    newPost.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send("money added");
        }
    });
})

router.get("/myMoney", (req,res) => {
    const id = "641f4db8091580309f35ee9f"
    ReactMoneyAmountModel.find({_id: id}, (err, results) =>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(results)
        }
    })
})

router.post("/myMoney", async (req, res) => {
    const id = '641f4db8091580309f35ee9f'
    const { amount } = req.body;
    await ReactMoneyAmountModel.findByIdAndUpdate(id,{money_amount: amount})
    res.send("cash added")
})

module.exports = router;