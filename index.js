const http = require("http");
const express = require('express')
const app = express()
const rateLimit = require ('express-rate-limit') 

const limiter = rateLimit({
    max:10,
    windowMs: 60000,
    message:'You exceeded your quota of Y requests for this interval'
})

const PORT = process.env.PORT || 5000;


app.get('/', limiter, async (req,res)=>{
    res.send('<h1>Welcome to root page</h1>')
})
app.get('/api', limiter, async (req,res)=>{
    res.send('<h1>Welcome to api page</h1>')
})

app.get('/y', limiter, async (req,res)=>{
    res.send('<h1>Welcome to y page</h1>')
})


app.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
})