import express from 'express'
import { viewCreditoLimite, postCredito, updateCredito } from '../repository/dao/creditosDAO.js'

export const creditosRoutes = express.Router()

creditosRoutes.get('/creditos', async (req, res) => {
	try {
		const creditos = await viewCreditoLimite()
		res.json(creditos)
	} catch (erro) {
		res.status(500).json({ erro: 'Erro ao listar créditos', detalhes: erro.message })
	}
})

creditosRoutes.post('/postCredito', async (req, res) => {
	try {
		const { nome } = req.body
		const resultado = await postCredito([nome])
		res.send(resultado)
	} catch (erro) {
		res.status(500).json({ erro: 'Erro ao cadastrar crédito', detalhes: erro.message })
	}
})

creditosRoutes.put('/putCreditos/:id', async (req, res) => {
	try {
		const { id } = req.params
		const { nome } = req.body
		const resultado = await updateCredito([nome, id])
		res.send(resultado)
	} catch (erro) {
		res.status(500).json({ erro: 'Erro ao atualizar crédito', detalhes: erro.message })
	}
})
