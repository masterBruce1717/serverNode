const express = require("express")
const APIdata = require("../controllers/data")
const mainRouter= express.Router()
mainRouter.route('/hollywood')
.get(APIdata.getData)


module.exports= mainRouter

