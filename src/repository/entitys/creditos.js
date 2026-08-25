import { connection } from "../connection.js"

export async function viewCreditoLimite() {
  console.log("Executando a função viewCreditoLimite")
  const sql = "SELECT * FROM LimiteDeCredito"

  const conn = await connection()
  try {
    const [rows, fields] = await conn.query(sql)
    await conn.end()
    return rows
  } catch (err) {
    return err.message
  }
}