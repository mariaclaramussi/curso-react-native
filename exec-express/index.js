const express = require('express')
const app = express()

 app.use((req, res, next) => {
   console.log('Rodando..')
   next() //indica que vai para o proximo da lista de prioridades de execucao
 })
// app.use((req, res) => { //use é aplicado para qualquer tipo de requisição
//   res.send('Deu certo')
// })

//a ordem das requisicoes importam (o contrario: relatório seria interpretado como ID do cliente)
//passagem de parametro via query (HTTP)
app.get('/clientes/relatorio', (req, res) => { //:id indica que ID vai ser um parametro da requisicao
  res.send(`Cliente relatório completo: ${req.query.completo} no ano ${req.query.ano}`) 
})

//caso o subdominio nao seja relatorio, vai buscar um id
app.get('/clientes/:id', (req, res) => { //:id indica que ID vai ser um parametro da requisicao
  res.send(`Cliente ${req.params.id} selecionado!`) 
})

app.get('/opa', (req, res) => { //Faz um get apenas na /opa
  // res.send("Requisicao GET")
  res.json({
    data: [
      {id: 7, name: 'Maria'},
      {id: 8, name: 'Bernardo'},
      {id: 43, name: 'Bianca'}
    ],
    count: 30 
  })
})

app.listen(3000, () => {
  console.log("Executando")
})