import { connection } from "../connection.js"

export async function viewClientes() {
  console.log("Executando a função viewClientes")
  const sql = "SELECT * FROM Cliente"

  const conn = await connection()
  try {
      const [rows, fields] = await conn.query(sql)
      await conn.end()
      return rows
  } catch (err) {
      return err.message
  }
}