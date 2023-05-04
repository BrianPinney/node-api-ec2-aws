import express from 'express'
import cors from 'cors'

const app = express()

const PORT = 4000

app.use(cors())
app.use(express.json())

const dogs = [
    {
    name: "Paco",
    breed: 'Chiuahua',
    age: 34
},
    {
    name: "buba",
    breed: 'Lab',
    age: 23
},
    {
    name: "Jericho",
    breed: 'Doberman',
    age: 2
},
    {
    name: "Phoenix",
    breed: 'Husky',
    age: 7
}

]

app.get('/', (req,res) => res.json(dogs))

app.listen(PORT, () => console.log(`API is running on port: ${PORT}`))