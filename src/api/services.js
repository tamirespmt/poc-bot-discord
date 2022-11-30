// chamando serviços da api devpass p/ conexão e validação

const { dadJokesApi } = require(".");

const getRandomDadJoke = async () => {
    const response = await axios.get(dadJokesApi);
    return response.data;
}

module.exports = {
  getRandomDadJoke
}
