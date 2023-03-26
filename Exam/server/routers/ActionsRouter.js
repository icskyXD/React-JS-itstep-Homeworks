const express = require("express");
const { ReactActionModel } = require("../Models");
const router = express.Router();

router.get("/", (req,res) => {
    ReactActionModel.find({}, (err, results) =>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(results)
        }
    })
})

router.post("/", async (req, res) => {
    const { type, name, product_amount, summary } = req.body;

    const newPost = new ReactActionModel({ type, name, product_amount, summary});
    newPost.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send("action created");
        }
    });
})

module.exports = router;