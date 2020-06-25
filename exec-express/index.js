const express = require('express')
const app = express()

// app.use((req, res) => { //use é aplicado para qualquer tipo de requisição
//   res.send('Deu certo')
// })

app.get('/opa', (req, res) => { //Faz um get apenas na /opa
  res.send("Requisicao GET")
})

app.listen(3000, () => {
  console.log("Executando")
})