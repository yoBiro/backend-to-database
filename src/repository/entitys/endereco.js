import { connection } from "../connection.js"

export async function viewEndereco() {
  console.log("Executando a função viewEndereco")
  const sql = "SELECT * FROM Endereco"

  const conn = await connection()
  try {
    const [rows, fields] = await conn.query(sql)
    await conn.end()
    return rows
  } catch (err) {
    return err.message
  }
}