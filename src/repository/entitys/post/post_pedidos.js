import { connection } from "../../connection.js"

export async function postPedido(infos) {
    console.log("Executando a função postPedido")

    const sqlInsert = `
        INSERT INTO Pedido
        (numero, data_elaboracao, id_cliente) 
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