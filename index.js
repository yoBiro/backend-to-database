import express from 'express'
import { viewClientes,postClientes } from './src/repository/dao/clientesDAO.js'
import { viewProdutos, postProduto } from './src/repository/dao/produtosDAO.js'
import { viewPedidos, postPedido } from './src/repository/dao/pedidosDAO.js'
import { viewPedidoProduto } from './src/repository/dao/pedido_produtoDAO.js'
import { viewCreditoLimite, postCredito } from './src/repository/dao/creditosDAO.js'
import { viewEndereco, postEndereco } from './src/repository/dao/enderecoDAO.js'

const app = express()
app.use(express.json())

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

app.post('/postCliente', async (req, res) => {
    let {nome, sobreNome, cpf, telefone, id_limite, id_endereco} = req.body
    let infos = [nome, sobreNome, cpf, telefone, id_limite, id_endereco]
    let results = await postClientes(infos)

    console.log(results)
    res.send(results)
})

app.post('/postPedido', async (req, res) => {
    let {numero, data_elaboracao, id_cliente} = req.body
    let infos = [numero, data_elaboracao, id_cliente]
    let results = await postPedido(infos)

    console.log(results)
    res.send(results)
})

app.post('/postEndereco', async (req, res) => {
    let {logradouro, numero, cep, cidade} = req.body
    let infos = [logradouro, numero, cep, cidade]
    let results = await postEndereco(infos)

    console.log(results)
    res.send(results)
})

app.post('/postCredito', async (req, res) => {
    let {nome} = req.body
    let infos = [nome]
    let results = await postCredito(infos)

    console.log(results)
    res.send(results)
})

app.post('/postProduto', async (req, res) => {
    let {nome, descricao, preco} = req.body
    let infos = [nome, descricao, preco]
    let results = await postProduto(infos)

    console.log(results)
    res.send(results)
})



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})