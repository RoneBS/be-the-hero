/**importando modulo express para dentro da variavel express
 * miniframework de rotas
 */
const express = require('express');
const cors = require('cors'); //5.2 K(gzipped: 2.1 K)
const routes = require('./routes');


//variavel armazenando a aplicação
const app = express();

//utilização dos apps
app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 * 
 */

/**
 * Métodos HTTP
 * GET: Buscar umainformação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletear uma informação no back-end
 */

/**
 * Tipos de parametros
 * 
 * Query Params: parametreos nomeados e enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetos utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * Bancos de Dados
 * SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */



//modificando a porta padrão
app.listen(3333);