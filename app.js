import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

import personaRoutes from './src/routes/docentes.js';

let app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.json({ result: 'OK'});
})

app.use("/personas", personaRoutes);

export default app