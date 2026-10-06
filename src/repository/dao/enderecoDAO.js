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

export async function postEndereco(infos) {
  console.log("Executando a função postEndereco")

  const sqlInsert = `
      INSERT INTO Endereco 
      (id_endereco, logradouro, numero, cep, cidade) 
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

export async function updateEndereco(infos) {
    console.log("Executando a função updateEndereco")
    const sqlUpdate = `
        UPDATE Endereco 
        SET logradouro = ?, numero = ?, cep = ?, cidade = ? 
        WHERE id_endereco = ?
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

export async function deleteEndereco(infos) {
    console.log("Executando a função deleteEndereco")
    const sqlDelete = `
        DELETE FROM Endereco 
        WHERE id_endereco = ?
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
