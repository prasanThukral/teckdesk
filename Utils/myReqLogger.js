const fs = require('fs');
const { promisify } = require('util')

const appendFile = promisify(fs.appendFile);

async function requestLogger(req,res,next){
try{
    //not add PI pls
const logMessage = `${new Date()}-date and time ${req.url}-url ${req.model}-model `
    await appendFile('RequestLogger.log',logMessage)
    next();
}catch(error){
    console.log(error)
}
}
module.exports = requestLogger;
