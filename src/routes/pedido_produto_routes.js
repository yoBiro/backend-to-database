import express from 'express'
import { viewPedidoProduto } from '../repository/dao/pedido_produtoDAO.js'

export const pedidoProdutoRoutes = express.Router()

pedidoProdutoRoutes.get('/pedidos_produtos', async (req, res) => {
    try {
        const pedidosProdutos = await viewPedidoProduto()
        res.json(pedidosProdutos)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao listar produtos dos pedidos', detalhes: erro.message })
    }
})