import express from 'express'
import cors from 'cors'
const server=express()
server.use(express.json())
server.use(cors())
const user=[]
const tweet=[]

server.get('/tweets',(req,res)=>{
    res.send(tweet.slice(-10))
})
server.get('/tweets/:USERNAME',(req,res)=>{
        const tweetUser=tweet.filter(e=>e.username===req.params.USERNAME)
        res.send(tweetUser)
})
server.post('/sign-up',(req,res)=>{
    if(!req.body.username||!req.body.avatar){
        res.status(400).send("Todos os campos são obrigatórios!")
    } else{
        res.status(201).send("OK")     
        user.push(req.body)
    }
})
server.post('/tweets',(req,res)=>{
    if(!req.headers.user||!req.body.tweet){
        res.status(400).send("Todos os campos são obrigatórios!")
    } else{
        res.status(201).send("OK")
        const obj={
            username:req.headers.user,
            avatar:req.body.avatar,
            tweet:req.body.tweet
        }
        tweet.push(obj)
    }
})

server.listen(5000)