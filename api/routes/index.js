const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute')

module.exports = (app) => {
    app.use(bodyParser.json())
    app.use(pessoas)
    app.get('/', (req, res) => res.send('<h2>Rota raiz!</h2>'))
}