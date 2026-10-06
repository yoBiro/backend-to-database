import express from 'express'
import { viewPedidos, postPedido, updatePedido, deletePedido } from '../repository/dao/pedidosDAO.js'

export const pedidosRoutes = express.Router()

pedidosRoutes.get('/pedidos', async (req, res) => {
	try {
		const pedidos = await viewPedidos()
		res.json(pedidos)
	} catch (erro) {
		res.status(500).json({ erro: 'Erro ao listar pedidos', detalhes: erro.message })
	}
})

pedidosRoutes.post('/postPedido', async (req, res) => {
	try {
		const { numero, data_elaboracao, id_cliente } = req.body
		const resultado = await postPedido([numero, data_elaboracao, id_cliente])
		res.send(resultado)
	} catch (erro) {
		res.status(500).json({ erro: 'Erro ao cadastrar pedido', detalhes: erro.message })
	}
})

pedidosRoutes.put('/putPedidos/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { numero, data_elaboracao, id_cliente } = req.body
        const resultado = await updatePedido([numero, data_elaboracao, id_cliente, id])
        res.send(resultado)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao atualizar pedido', detalhes: erro.message })
    }
})

pedidosRoutes.delete('/deletePedido/:id', async (req, res) => {
		try {
				const { id } = req.params	
				const resultado = await deletePedido([id])
				res.send(resultado)
		} catch (erro) {
				res.status(500).json({ erro: 'Erro ao excluir pedido', detalhes: erro.message })
		}
})
