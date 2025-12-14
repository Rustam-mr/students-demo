import express from "express"
import type { Request, Response} from "express";
import cors from "cors"
import bodyParser from "body-parser"



const app = express()

const corsMiddleware = cors()
app.use(corsMiddleware)
const jsonBodyMidlleware = bodyParser.json()

const port = process.env.PORT || 5000

app.get('/', (req: Request, res: Response) => {
  let helloMessage = 'Hello mister Rustik!'
  res.send(helloMessage)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})