import { connection } from "../connection.js"

export async function viewPedidos() {
  console.log("Executando a função viewPedidos")
  const sql = "SELECT * FROM Pedido"

  const conn = await connection()
  try {
    const [rows, fields] = await conn.query(sql)
    await conn.end()
    return rows
  } catch (err) {
    return err.message
  }
}