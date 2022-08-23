import express from "express"
import bodyParser from  "body-parser"

const router = express.Router()
const app = express()
const PORT = 8000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/', router)

app.get('/', (req, res) => {
    res.send("Welcome to the Home Page")
})


let id = 0
let search = [
        
    {
        id: 1,
        artist: 'sud',
        song: 'di makatulog'
    },
    {
        id: 2,
        artist: 'munimuni',
        song: 'kalachuchi'
    },
    {
        id: 3,
        artist: 'leanne and naara',
        song: 'never made it far'
    },
    {
        id: 4,
        artist: 'hey june!',
        song: 'panahon'
    },
    {
        id: 5,
        artist: 'zild',
        song: 'kyusi'
    }

]
app.get('/search', (req, res) => {
    
    res.json(search)
})

app.get('/search/:id/', (req, res,) => {

    // search.forEach(function(ids) {
    //     console.log(ids.id)
    //     if (ids.id == req.params.id)
    //     res.send(200, ids.id)
    //     // res.json(search[req.params.id])
    // })
    if (search[req.params.id - 1]){
        res.json(search[req.params.id - 1])
    
    } else {
        res.status(400).send("Sorry no Data Found")
    }
})

app.get('*', (req, res) => {
    res.status(403).send('Forbidden Page')
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!!`)
})