const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router
    .get('/pessoas', PessoaController.pegaPessoasAtivas)
    .get('/pessoas/todas', PessoaController.pegaTodasAsPessoas)
    .get('/pessoas/:id', PessoaController.pegaPessoaPorId)
    .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaMatriculaPorId)
    .get('/pessoas/:estudanteId/matricula/', PessoaController.pegaMatricula)
    .post('/pessoas', PessoaController.criaPessoa)
    .put('/pessoas/:id', PessoaController.atualizaPessoa)
    .delete('/pessoas/:id', PessoaController.deletaPessoa)
    .post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
    .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
    .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deletaMatricula)
    .post('/pessoas/:id/restaura/', PessoaController.restauraPessoa)
    .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura/', PessoaController.restauraMatricula)


module.exports = router