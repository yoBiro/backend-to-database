import express from 'express'
import { viewEndereco, postEndereco, updateEndereco, deleteEndereco } from '../repository/dao/enderecoDAO.js'

export const enderecoRoutes = express.Router()

enderecoRoutes.get('/enderecos', async (req, res) => {
	try {
		const enderecos = await viewEndereco()
		res.json(enderecos)
	} catch (erro) {
		res.status(500).json({ erro: 'Erro ao listar endereços', detalhes: erro.message })
	}
})

enderecoRoutes.post('/postEndereco', async (req, res) => {
	try {
		const { id_endereco, logradouro, numero, cep, cidade } = req.body
		const resultado = await postEndereco([id_endereco, logradouro, numero, cep, cidade])
		res.send(resultado)
	} catch (erro) {
		res.status(500).json({ erro: 'Erro ao cadastrar endereço', detalhes: erro.message })
	}
})

enderecoRoutes.put('/putEnderecos/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { logradouro, numero, cep, cidade } = req.body
        const resultado = await updateEndereco([logradouro, numero, cep, cidade, id])
        res.send(resultado)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao atualizar endereço', detalhes: erro.message })
    }
})

enderecoRoutes.delete('/deleteEndereco/:id', async (req, res) => {
		try {
				const { id } = req.params
				const resultado = await deleteEndereco([id])
				res.send(resultado)
		} catch (erro) {
				res.status(500).json({ erro: 'Erro ao excluir endereço', detalhes: erro.message })
		}
})
