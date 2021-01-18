const express = require("express");
const router = express.Router();
const axios = require('axios').default;


router.get("/rates",async(req,res) => {
    console.log(`https://api.exchangeratesapi.io/latest?base=${req.query['base']}&symbols=${req.query.currency}`)
        
    try{
        const result = await axios.get(`https://api.exchangeratesapi.io/latest?base=${req.query['base']}&symbols=${req.query.currency}`)
        
        return res.json(result.data)
    }catch(e){
        // console.log(e)
        return res.status(400).json({
            "type":"error",
            "status":e.status,
            "message":e.response.data,
        })
    }
})
module.exports = router;
