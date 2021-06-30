import express from 'express';

const app = express();

/**
 * GET    => Buscar uma informação
 * POST   => Inserir/Criar uma informação
 * PUT    => Alterar uma informação
 * DELETE => Remover uma informação
 * PATCH  => Alterar uma informação específica
 */

app.get("/test", (request, response) => {
  // Request => Entrando
  // Response => Saindo
  return response.send("Hello World");
});

app.post("/test-post", (request, response) => {
  return response.send("POST METHOD")
})

app.listen(3000, () => console.log('Server is running'));
