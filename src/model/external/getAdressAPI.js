const axios = require('axios');

const getAdressByCEP = async (CEP) => {
  return axios.get(`https://viacep.com.br/ws/${CEP}/json/`)
    .then(response => {
      return response.data
    })
    .catch(error => {
      return error
    });
}

module.exports = getAdressByCEP;