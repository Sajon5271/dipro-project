const express = require('express')
const app = express()

const loginRouter = require('./routes/login')
const regRouter = require('./routes/resgister')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use('/resource', express.static('resources'))


app.get('/', (req, res) => {
    res.render('index')
})

app.use('/login', loginRouter)
app.use('/register', regRouter)




app.listen(process.env.PORT || 3000)