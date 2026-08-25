import { connection } from "../connection.js"

export async function viewProdutos() {
  console.log("Executando a função viewProdutos")
  const sql = "SELECT * FROM Produto"

  const conn = await connection()
  try {
    const [rows, fields] = await conn.query(sql)
    await conn.end()
    return rows
  } catch (err) {
    return err.message
  }
}