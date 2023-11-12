import mongoose  from'mongoose';

 const URL = 'mongodb://127.0.0.1:27017/prueba';

 export const connectDb = async() => {
    try {
        const db = await mongoose.connect(URL);
        console.log('BASE DE DATOS CONECTADA!!!', db.connection.name);
    } catch (error) {
        console.log('Errro al conectar a la base de datos', error.message);
    }
}

