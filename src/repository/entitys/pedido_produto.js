import { connection } from "../connection.js"

export async function viewPedidoProduto() {
  console.log("Executando a função viewPedidoProduto")

  // Consulta corrigida realizando a ponte através da tabela associativa
  const sqlJoin = `
    SELECT 
      Pedido.numero AS numero_pedido, 
      Pedido.id_cliente, 
      Produto.nome AS nome_produto
    FROM Pedido
    INNER JOIN Pedido_Produto ON Pedido.numero = Pedido_Produto.id_pedido
    INNER JOIN Produto ON Pedido_Produto.id_produto = Produto.codigo
  `

  const conn = await connection()
  try {
    // Executa a junção das 3 tabelas e armazena o resultado
    const [rows, fields] = await conn.query(sqlJoin)
    await conn.end()
    return rows // Retorna a lista contendo pedidos e seus respectivos produtos
  } catch (err) {
    if (conn) await conn.end()
    return err.message
  }
}