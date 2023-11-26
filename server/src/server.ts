import express, { Application, json, urlencoded } from 'express';
import { config } from 'dotenv';
import { Connection, connect, connection } from 'mongoose';
import cors from 'cors';
import { logger } from './middleware/loggerMiddleware';
import { router as todoRoutes } from './routes/todoRoutes';

// configure environment variables
config()

// setup express application
const app: Application = express()

// setup mongoose connection to mongodb
connect(process.env.MONGO_URI)
const db: Connection = connection
db.on('error', error => console.error(error))
db.once('open', () => console.log(`connected to database`))

// setup express middleware
app.use(json())
app.use(cors())
app.use(urlencoded({ extended: true }))
app.use(logger)

// todo routes
app.use('/api/todos', todoRoutes)

// start server and listen for request
const port: string|number = process.env.PORT || 999
app.listen(port, () => console.log(`listening for request at: http://localhost:${port}`))