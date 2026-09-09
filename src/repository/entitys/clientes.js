import { connection } from "../connection.js"

export async function viewClientes() {
    console.log("Executando a função viewClientes")

        const sqlSelect = `SELECT * FROM vwClientes`

    const conn = await connection()
    try {
        const [rows, fields] = await conn.query(sqlSelect)
        await conn.end()
        return rows
    } catch (err) {
        return err.message
    }
}
