import express from 'express';
import { viewClientes, postClientes, updateCliente, deleteCliente } from '../repository/dao/clientesDAO.js'

export const clientesRoutes = express.Router();

clientesRoutes.get('/cliente', async (req, res) => {
    try {
        const clientes = await viewClientes()
        res.json(clientes)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao listar clientes', detalhes: erro.message })
    }
})

clientesRoutes.post('/postCliente', async (req, res) => {
    let {nome, sobreNome, cpf, telefone, id_limite, id_endereco} = req.body
    let infos = [nome, sobreNome, cpf, telefone, id_limite, id_endereco]
    let results = await postClientes(infos)

    res.send(results)
})

clientesRoutes.put('/putCliente/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { nome, sobreNome, cpf, telefone, id_limite, id_endereco } = req.body
        const infos = [nome, sobreNome, cpf, telefone, id_limite, id_endereco, id]
        const results = await updateCliente(infos)

        res.send(results)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao atualizar cliente', detalhes: erro.message })
    }
})

clientesRoutes.delete('/deleteCliente/:id', async (req, res) => {
    try {
        const { id } = req.params
        const results = await deleteCliente([id])

        res.send(results)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao excluir cliente', detalhes: erro.message })
    }
})