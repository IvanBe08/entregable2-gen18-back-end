const express = require('express')

const userRouter = require('./users/users.router')

const port = 9000

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ message: 'OK' })
})

app.use('/api/v1', userRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})