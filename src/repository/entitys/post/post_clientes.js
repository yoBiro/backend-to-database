import { connection } from "../../connection.js"

export async function postClientes(infos) {
    console.log("Executando a função postClientes")

    const data = [infos]
    const sqlInsert = `INSERT INTO Cliente (nome, sobreNome, cpf, telefone, id_limite, id_endereco) VALUES ?`

    const conn = await connection()
    try {
        const [results] = await conn.query(sql[data])
        await conn.end()
        return rows
    } catch (err) {
        return err.message
    }
}