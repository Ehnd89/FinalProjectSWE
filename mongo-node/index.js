import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import { loginUser, resgisterUser, setUp } from './controller/auth.js';

// CONFIG's
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const app = express();
app.use(express.json());
// app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
// app.use(morgan('common'));
// app.use(bodyParser.json({ limit: '30mb' }));
// app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.post('/api/register', (req, res) => {
  console.log(req.body);
  resgisterUser(req, res);
});

app.post('/api/login', (req, res) => {
  console.log(req.body);
  loginUser(req, res);
});

app.post('/api/setup', (req, res) => {
  console.log(req.body);
  setUp(req, res);
});

// MONGO
const PORT = process.env.PORT;
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    app.listen(PORT, () => console.log('Running'));
  })
  .catch((err) => console.log('error', err));
