import express from 'express';
import cors from 'cors';
import { getAllClothes } from './src/clothing.js';


const app = express();
const PORT = 3030;

app.use(cors());
app.use(express.json());
app.get('/clothes', getAllClothes)

app.listen(PORT, () => console.log(`Listening to http://localhost:${PORT}...`))