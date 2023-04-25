// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors({
//     credentials: true,
//     origin: 'http://localhost:5173/'
// }))

// app.get('/test',(req,res)=>{
//     res.json('test ok')
// })

// app.listen(3000)

const express = require("express");
var cors = require('cors')
const app = express();
app.use(cors());
const { createProxyMiddleware } = require('http-proxy-middleware');
app.use('/test', createProxyMiddleware({ 
    target: 'http://localhost:5173/', //original url
    changeOrigin: true, 
    //secure: false,
    onProxyRes: function (proxyRes, req, res) {
       proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
}));
app.listen(3000);