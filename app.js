const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000
//const dist = process.env.dist

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

// muutos branchia varten
// toinenkin muutos

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
