import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

import docentesRoutes from './src/routes/docentes.js';
import alumnosRoutes from './src/routes/alumnos.js';

let app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.json({ result: 'OK'});
})

app.use("/docentes", docentesRoutes);
app.use("/cursos", alumnosRoutes);

export default app