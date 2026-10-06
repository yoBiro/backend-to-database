import { connection } from "../connection.js"

export async function viewClientes() {
    console.log("Executando a função viewClientes")

        const sqlSelect = `SELECT * FROM Cliente`

    const conn = await connection()
    try {
        const [rows, fields] = await conn.query(sqlSelect)
        await conn.end()
        return rows
    } catch (err) {
        return err.message
    }
}

export async function postClientes(infos) {
    console.log("Executando a função postClientes")

    const sqlInsert = `
        INSERT INTO Cliente 
        (nome, sobreNome, cpf, telefone, id_limite, id_endereco) 
        VALUES ?
    `

    const data = [infos]
    const conn = await connection()

    try {
        const [results] = await conn.query(sqlInsert, [data])
        await conn.end()
        return results
    } catch (err) {
        await conn.end()
        return err.message
    }
}

export async function updateCliente(infos) {
    console.log("Executando a função updateCliente")
    const sqlUpdate = `
        UPDATE Cliente 
        SET nome = ?, sobreNome = ?, cpf = ?, telefone = ?, id_limite = ?, id_endereco = ? 
        WHERE codigo = ?
    `

    const conn = await connection()

    try {
        const [results] = await conn.query(sqlUpdate, infos)
        await conn.end()
        return results
    } catch (err) {
        await conn.end()
        return err.message
    }
}

export async function deleteCliente(infos) {
    console.log("Executando a função deleteCliente")
    const sqlDelete = `
        DELETE FROM Cliente 
        WHERE codigo = ?
    `
    
    const conn = await connection() 
    try {
        const [results] = await conn.query(sqlDelete, infos)
        await conn.end()
        return results
    } catch (err) {
        await conn.end()
        return err.message
    }
}
