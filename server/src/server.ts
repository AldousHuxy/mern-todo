import { log, error as err } from 'console';
import cors from 'cors';
import express, { Application, json, Request, Response, urlencoded } from 'express';
import { connect, connection, Connection } from 'mongoose';
import { logger } from './middleware/loggerMiddleware';
import { errorHandler } from './middleware/errorMiddleware';
import { router as todoRoutes } from './routes/todoRoutes';

const app: Application = express()

connect(process.env.MONGO_URI as string)
const db: Connection = connection
db.on('error', e => err(e))
db.once('open', () => log(`connected to database: ${connection.name}`))

app.use(cors())
app.use(urlencoded({ extended: true }))
app.use(json())
app.use(logger)

app.get('/api', (req: Request, res: Response) => res.json({ message: 'Welcome to the Todo App' }).status(200))

app.use('/api/todos', todoRoutes)

app.use(errorHandler)

const port: string|number = process.env.PORT || 1999
app.listen(port, () => log(`listening for request: http://localhost:${port}/api`))