import express from 'express'
import { clientesRoutes } from './src/routes/clientes_routes.js'
import { creditosRoutes } from './src/routes/creditos_routes.js'
import { enderecoRoutes } from './src/routes/endereco_routes.js'
import { pedidosRoutes } from './src/routes/pedidos_routes.js'
import { pedidoProdutoRoutes } from './src/routes/pedido_produto_routes.js'
import { produtosRoutes } from './src/routes/produtos_routes.js'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use(clientesRoutes)
app.use(creditosRoutes)
app.use(enderecoRoutes)
app.use(pedidosRoutes)
app.use(pedidoProdutoRoutes)
app.use(produtosRoutes)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})