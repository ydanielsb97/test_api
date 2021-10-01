const { env } = require("./config")
const { send } = require("./providers/index")

/**
 * 
 * @param  {...any} data 
 * @returns {Array}
 */
const info = (...data) => {
    
    data.forEach(log => {
        console.log(log);
    });

    if(env !== "development") send(data, "INFO");

    return data;
}

/**
 * 
 * @param  {...any} data 
 */
const error = (...data) => {

    data.forEach(log => {
        console.log(log);
    });

    if(env !== "development") send(data, "ERROR");

    return data;
}

const returnAll = () => {
    return {info, error}
}

module.exports = returnAll();