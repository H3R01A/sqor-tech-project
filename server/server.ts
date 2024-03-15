import express from 'express';
import { Request, Response } from 'express';
import dotenv from 'dotenv';
// import path from 'path';
// const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
// const __dirname = path.dirname(__filename); // get the name of the directory
import cors from 'cors';

const app = express();

dotenv.config();

console.log('hi from the backend');

let port: string | undefined | number = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

if (port === null || port === '' || port === undefined) {
  port = 3000;
}

//app.use(express.static(path.join(__dirname, '../build')));

// app.get('/', (req, res) => {
//     return res.status(200).sendFile(path.join(__dirname, '../index.html'));
// })

app.use((err: Error, _req: Request, res: Response) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
