const { default: axios } = require("axios")
const { appName, api } = require("../config");


/**
 * 
 * @param {object} data 
 * @param {string} type 
 * @returns {object}
 */
module.exports.send = function (data, type)  {
    console.log(data);
    return axios.post(`${api.url}/logs/${appName}/type/${type}`, 
            { data },
            {
                headers: {
                    authorization: `Bearer ${api.token}`
                }
            }
    ).then(res => {
        return res.data
    }).catch(error => {
        return {error};
    })
}


/**
 * 
 * @returns {object}
 */
module.exports.get = function () {
    return axios.get(`${api.url}/logs/${appName}`,
            {
                headers: {
                    authorization: api.token
                }
            }
    ).then(res => {
        return res.data
    }).catch(error => {
        return {error};
    })
}
