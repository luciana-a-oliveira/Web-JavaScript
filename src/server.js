// servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//configurar nunjucks (templates engine)
const nunjucks = require('nunjucks')
nunjucks.configure('srs/views', {
    express: server,
    noCache: true,
})

//inicio conf servidor
server
// receber os dados do req.body
.use(express.urlencoded({ extended: true}))
//configurar arq estáticos (css, scripts, imagens)
.use(express.static("public"))
 // servidor enviando as rotas da aplicaçao
.get("/", pageLanding)   
.get("/study", pageStudy) 
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses) 
//start do servidor
.listen(5500)
