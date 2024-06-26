import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { StudentRoters } from './app/modules/student/student.router'
const app:Application = express()



app.use(express.json())
app.use(cors())




app.use('/api/v1/students', StudentRoters)





app.get('/', (req:Request, res:Response) => {
  res.send('Hello')
})

export  default app;