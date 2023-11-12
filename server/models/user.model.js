

import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
},{
    timestamps:true
});

export  const UserModel = model('usuario', UserSchema, 'usuarios');



