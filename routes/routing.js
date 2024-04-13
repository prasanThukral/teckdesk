const express = require('express')
const routing = express.Router();
const controller = require('../controller/controller')

routing.post('/createService',controller.createTicket)

routing.get('/createService',controller.getAllTickets)

routing.get('/createService/:Name',controller.getSpecificTicket)

routing.delete('/createService/:id',controller.deleteTicket)
    
routing.all('*',(req,res)=>{res.status(400).json({
    status:'Access denied',
}) })
module.exports = routing