
const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const path = require('path')
const app = express()
const port = 3000

// const harryMiddleware = (req, res, next)=>{
//   console.log(req)
//   next()
// }

app.use(express.static(path.join(__dirname, "public")))
// app.use(harryMiddleware)

app.get('/hello/:name', (req, res) => {
  res.send('Hello World!' +  req.params.name)
})
// app.get("/", (req,res)=>{
//   res.send("muddassir ali rana")
// })

app.get('/about', (req, res) => {
//   res.send('about')
// res.sendFile(path.join(__dirname, 'index.html'))
// res.status(500)
    res.json({"rana": 34})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})