import mysql from "mysql2/promise"

async function connection() {
    const pool = mysql.createPool({
        host: "",
        port: ,
        user: "",
        password: "",
        database: ""
    })
    return pool
} // <-- Fechando a função conexao

async function closeConnection(pool) {
    if (pool) {
        console.log("Fechando a conexão com o banco de dados")
        await pool.end()
    } else {
        console.log("Conexão já fechada")
    }
}

async function testConnection() {
    try {
        const pool = await connection();
        const conn = await pool.getConnection();
        await conn.ping();
        console.log("✅ Conexão com o MySQL bem-sucedida!");
        conn.release();
    } catch (erro) {
        console.error("❌ Falha ao conectar com o MySQL:", erro.message);
    }
}

export { connection, closeConnection, testConnection }