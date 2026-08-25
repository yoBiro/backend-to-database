import { connection } from "../connection.js"

export async function viewPedidoProduto() {
  console.log("Executando a função viewPedidoProduto")
  const sql = "SELECT * FROM Pedido_Produto"

  const conn = await connection()
  try {
    const [rows, fields] = await conn.query(sql)
    await conn.end()
    return rows
  } catch (err) {
    return err.message
  }
}