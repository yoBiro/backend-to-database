import express from 'express';
import { viewClientes, postClientes, updateCliente } from '../repository/dao/clientesDAO.js'

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
    let { id } = req.params
    let { nome, sobreNome, cpf, telefone, id_limite, id_endereco } = req.body
    let infos = [nome, sobreNome, cpf, telefone, id_limite, id_endereco, id]
    let results = await updateCliente(id, infos)

    res.send(results)
})