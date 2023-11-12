

import { Schema, model } from 'mongoose';

const employeSchema = new Schema({
  nombres: {
    type: String,
    required: true,
  },
  apellidos: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  tcontrato: {
    type: String,
    required: true,
  },
  usuario: {type: Schema.ObjectId, ref: 'usuario'},
},
    {
        timestamps:true
    }
);

export  const EmpleadoModel = model('empleado', employeSchema, 'empleados');

