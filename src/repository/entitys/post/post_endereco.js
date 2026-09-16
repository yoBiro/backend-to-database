import { connection } from "../../connection.js"

export async function postEndereco(infos) {
    console.log("Executando a função postEndereco")

    const sqlInsert = `
        INSERT INTO Cliente 
        (logradouro, numero, cep, cidade) 
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
