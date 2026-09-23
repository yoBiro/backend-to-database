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

export async function postProduto(infos) {
  console.log("Executando a função postProduto")

  const sqlInsert = `
      INSERT INTO Produto
      (nome, descricao, preco) 
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