import { connection } from "../../connection.js"

export async function postCredito(infos) {
    console.log("Executando a função postCredito")

    const sqlInsert = `
        INSERT INTO LimiteDeCredito
        (nome) 
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