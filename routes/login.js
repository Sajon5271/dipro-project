const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('login.ejs')
})

router.post('/', (req, res) => {
    res.send("Needs to be implemented")
})


module.exports = router