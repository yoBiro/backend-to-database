import { connection } from "../connection.js"

export async function viewClientes() {
  console.log("Executando a função viewClientes")

  const sqlCreate = `
    CREATE OR REPLACE VIEW vwClientes AS 
    SELECT * FROM Cliente WHERE codigo % 2 = 0
  `
  const sqlSelect = `SELECT * FROM vwClientes`

  const conn = await connection()
  try {
      await conn.query(sqlCreate)
      
      // 3. Executa a busca dos dados na sequência
      const [rows, fields] = await conn.query(sqlSelect)
      await conn.end()
      return rows
  } catch (err) {
      return err.message
  }
}