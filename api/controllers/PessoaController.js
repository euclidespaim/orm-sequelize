const database = require('../models')
const Sequilize = require('sequelize')
const { Sequelize } = require('../models')


class PessoaController {
    static async pegaPessoasAtivas(req, res) {
        try {
            const pessoasAtivas = await database.Pessoas.findAll()
            
            return res.status(200).json(pessoasAtivas)

        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }

    static async pegaTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await database.Pessoas.scope('todos').findAll()
            
            return res.status(200).json(todasAsPessoas)

        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }

    static async pegaPessoaPorId(req, res) {
        const { id } = req.params
        try {
            const umaPessoa = await database.Pessoas.findOne( { 
                where: { 
                    id: Number(id)
                } 
            })

            return res.status(200).json(umaPessoa)  

        } catch (error){
            return res.status(500).json({error: error.message})
        }
    }

    static async criaPessoa(req, res) {
        const novaPessoa = req.body
        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)

            return res.status(201).json(novaPessoaCriada)

        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }

    static async atualizaPessoa(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Pessoas.update(novasInfos, {
                where: { id: Number(id) }
            })

            const pessoaAtualizada = await database.Pessoas.findOne({
                where: { id: Number(id) } 
            })

            return res.status(200).json(pessoaAtualizada)

        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }

    static async deletaPessoa(req, res) {
        const { id } = req.params
        try {
            await database.Pessoas.destroy({
                where: { id: Number(id) }
            })

            return res.status(200).json({message: `Pessoa id: ${id} deletada com sucesso!`})

        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }

    static async restauraPessoa(req, res) {
        const { id } = req.params
        try {
            await database.Pessoas.restore( {where: { id: Number(id) } } )
            return res.status(200).json({message: `Pessoa id: ${id} restaurada com sucesso!`})

        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }

    static async pegaMatriculaPorId(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
            const umaMatricula = await database.Matriculas.findOne( {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })
            return res.status(200).json(umaMatricula)  

        } catch (error){
            return res.status(500).json({error: error.message})
        }
    }

    static async criaMatricula(req, res) {
        const { estudanteId } = req.params
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }

        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)

            return res.status(201).json(novaMatriculaCriada)

        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }

    static async atualizaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        const novasInfos = req.body

        try {
            await database.Matriculas.update(novasInfos, {
                where: { 
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })

            const matriculaAtualizada = await database.Matriculas.findOne({
                where: { id: Number(matriculaId) } 
            })

            return res.status(200).json(matriculaAtualizada)

        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }

    static async deletaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params

        try {
            await database.Matriculas.destroy({
                where: { id: Number(matriculaId) }
            })

            return res.status(200).json({message: `Matrícula id: ${matriculaId} deletada com sucesso!`})

        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }

    static async restauraMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params

        try {
            await database.Matriculas.restore( {
                where: { 
                    id: Number(matriculaId),
                estudante_id: Number(estudanteId) 
                } 
            })
            return res.status(200).json({message: `Matrícula id: ${matriculaId} restaurada com sucesso!`})

        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }

    static async pegaMatricula(req, res) {
        const { estudanteId } = req.params

        try {
            const pessoa = await database.Pessoas.findOne(
                { where: { id:Number(estudanteId) } })
            const matriculas = await pessoa.getAulasMatriculadas()

            return res.status(200).json(matriculas)

        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }

    static async pegaMatriculaPorTurma(req, res) {
        const { turmaId } = req.params

        try {
            const todasAsMatriculas = await database.Matriculas.findAndCountAll({
                where: { 
                    turma_id: Number(turmaId),
                    status: 'confirmado'
                },
                limit: 20,
                order: [['estudante_id', 'DESC']]
            })
            return res.status(200).json(todasAsMatriculas)

        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }

    static async pegaTurmasLotadas(req, res) {
        const lotacaoTurma = 2
        
        try {
            const turmasLotadas = await database.Matriculas
            .findAndCountAll({
                where: {
                    status: 'confirmado'
                },
                attributes: ['turma_id'],
                group: ['turma_id'],
                having: Sequelize.literal(`COUNT(turma_id) >= ${lotacaoTurma}`)
            })
            return res.status(200).json(turmasLotadas)

        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    }
}

module.exports = PessoaController