import express from 'express'
import { viewClientes } from './src/repository/entitys/clientes.js'
import { viewProdutos } from './src/repository/entitys/produtos.js'
import { viewPedidos } from './src/repository/entitys/pedidos.js'
import { viewPedidoProduto } from './src/repository/entitys/pedido_produto.js'
import { viewCreditoLimite } from './src/repository/entitys/creditos.js'
import { viewEndereco } from './src/repository/entitys/endereco.js'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/cliente', async (req, res) => {
    try {
        const clientes = await viewClientes()
        res.json(clientes)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao listar clientes', detalhes: erro.message })
    }
})

app.get('/pedidos', async (req, res) => {
    try {
        const pedidos = await viewPedidos()
        res.json(pedidos)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao listar clientes', detalhes: erro.message })
    }
})

app.get('/produtos', async (req, res) => {
    try {
        const produtos = await viewProdutos()
        res.json(produtos)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao listar clientes', detalhes: erro.message })
    }
})

app.get('/creditos', async (req, res) => {
    try {
        const creditos = await viewCreditoLimite()
        res.json(creditos)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao listar clientes', detalhes: erro.message })
    }
})

app.get('/enderecos', async (req, res) => {
    try {
        const enderecos = await viewEndereco()
        res.json(enderecos)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao listar clientes', detalhes: erro.message })
    }
})

app.get('/pedidos_produtos', async (req, res) => {
    try {
        const pedidos_produtos = await viewPedidoProduto()
        res.json(pedidos_produtos)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao listar clientes', detalhes: erro.message })
    }
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})