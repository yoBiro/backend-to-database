import express from 'express'
import { viewProdutos, postProduto, updateProduto } from '../repository/dao/produtosDAO.js'

export const produtosRoutes = express.Router()

produtosRoutes.get('/produtos', async (req, res) => {
	try {
		const produtos = await viewProdutos()
		res.json(produtos)
	} catch (erro) {
		res.status(500).json({ erro: 'Erro ao listar produtos', detalhes: erro.message })
	}
})

produtosRoutes.post('/postProduto', async (req, res) => {
	try {
		const { nome, descricao, preco } = req.body
		const resultado = await postProduto([nome, descricao, preco])
		res.send(resultado)
	} catch (erro) {
		res.status(500).json({ erro: 'Erro ao cadastrar produto', detalhes: erro.message })
	}
})

produtosRoutes.put('/putProdutos/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { nome, descricao, preco } = req.body
        const resultado = await updateProduto([nome, descricao, preco, id])
        res.send(resultado)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao atualizar produto', detalhes: erro.message })
    }
})

produtosRoutes.delete('/deleteProduto/:id', async (req, res) => {
		try {
				const { id } = req.params
				const resultado = await deleteProduto([id])
				res.send(resultado)
		} catch (erro) {
				res.status(500).json({ erro: 'Erro ao excluir produto', detalhes: erro.message })
		}
})
