import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import {connectDb} from './conexion/db.js'
import userRoute from './routes/usuario.route.js';
import employeeRoute from './routes/empleado.route.js'
connectDb();


const app = express();
const port = 4001;

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));


//rutas
app.use('/api', userRoute);
app.use('/api/employee', employeeRoute);

//escuchar al servidor
app.listen(port, () => {
    console.log(`Escuchando al servidor en el puerto ${port}`);
})