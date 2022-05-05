const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router
    .get('/pessoas', PessoaController.pegaPessoasAtivas)
    .get('/pessoas/todas', PessoaController.pegaTodasAsPessoas)
    .get('/pessoas/:id', PessoaController.pegaPessoaPorId)
    .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaMatriculaPorId)
    .get('/pessoas/:estudanteId/matricula/', PessoaController.pegaMatricula)
    .get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegaMatriculaPorTurma)
    .get('/pessoas/matricula/lotada', PessoaController.pegaTurmasLotadas)
    .post('/pessoas', PessoaController.criaPessoa)
    .post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
    .post('/pessoas/:id/restaura/', PessoaController.restauraPessoa)
    .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura/', PessoaController.restauraMatricula)
    .post('/pessoas/:estudanteId/cancela/', PessoaController.cancelaPessoa)
    .put('/pessoas/:id', PessoaController.atualizaPessoa)
    .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
    .delete('/pessoas/:id', PessoaController.deletaPessoa)
    .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deletaMatricula)


module.exports = router