import express from 'express'
import cors from 'cors'

const app = express()

const PORT = 4000

app.use(cors())
app.use(express.json())

app.get('/', (req,res) => res.send('Welcome to my API'))

app.listen(PORT, () => console.log(`API is running on port: ${PORT}`))