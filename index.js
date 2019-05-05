const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/header', (req, res) => {
    res.render('header')
})

app.listen(3000, err => {
    if(err) {
        console.log('Não foi possível rodar o servidor!')
    } else {
        console.log('Servidor On line!')
    }
})

