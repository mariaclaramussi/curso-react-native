const express = require('express')
const app = express()

//quando chegar na raiza da aplicacao
app.get('/', (req, res) => {
  //caso tenha sucesso
  res.status(200).send("Teste")
})

app.listen(3000, () => {
  console.log("exec")
})