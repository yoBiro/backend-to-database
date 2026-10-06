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

export async function postCredito(infos) {
  console.log("Executando a função postCredito")

  const sqlInsert = `
      INSERT INTO LimiteDeCredito
      (nome) 
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

export async function updateCredito(infos) {
    console.log("Executando a função updateCredito")
    const sqlUpdate = `
        UPDATE LimiteDeCredito 
        SET nome = ? 
        WHERE id_limite = ?
    `

    const conn = await connection()

    try {
        const [results] = await conn.query(sqlUpdate, infos)
        await conn.end()
        return results
    } catch (err) {
        await conn.end()
        return err.message
    }
}

export async function deleteCredito(infos) {
    console.log("Executando a função deleteCredito")
    const sqlDelete = `
        DELETE FROM LimiteDeCredito 
        WHERE id_limite = ?
    `

    const conn = await connection()
    
    try {
        const [results] = await conn.query(sqlDelete, infos)
        await conn.end()
        return results
    } catch (err) {
        await conn.end()
        return err.message
    }
}