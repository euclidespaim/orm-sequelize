const { Router } = require('express')
const MatriculaController = require('../controllers/MatriculaController')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router
    .get('/pessoas', PessoaController.pegaTodasAsPessoas)  
    .get('/pessoas/ativas', PessoaController.pegaPessoasAtivas)  
    .get('/pessoas/:id', PessoaController.pegaPessoaPorId)  
    .get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas)  
    .get('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.pegaUmaMatricula)  
    .get('/pessoas/matricula/:turmaId/confirmadas', MatriculaController.pegaMatriculasPorTurma)  
    .get('/pessoas/matricula/lotada', MatriculaController.pegaTurmasLotadas)  
    .post('/pessoas', PessoaController.criaPessoa)
    .post('/pessoas/:estudanteId/matricula', MatriculaController.criaMatricula)
    .post('/pessoas/:id/restaura/', PessoaController.restauraPessoa)
    .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura/', MatriculaController.restauraMatricula)
    .post('/pessoas/:estudanteId/cancela/', PessoaController.cancelaPessoa)
    .put('/pessoas/:id', PessoaController.atualizaPessoa)
    .put('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.atualizaMatricula)
    .delete('/pessoas/:id', PessoaController.deletaPessoa)
    .delete('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.apagaMatricula)


module.exports = router