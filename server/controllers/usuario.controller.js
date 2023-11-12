import { UserModel } from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import messages from '../utils/menssages.js'

const userCtrl = {}

userCtrl.register = async (req, res) => {
  try {
    const data = req.body

    //verificar que el correo no exista
    const existUser = await UserModel.findOne({ correo: req.body.correo })
    if (existUser) {
    //   return res.status(400).json({
    //     ok: false,
    //     message: 'El correo ya existe'
    //   });
      return messages.messageGeneral(res, 400, false, '', 'El correo ya existe')
    }

    if (!data.nombre || !data.correo || !data.password) {
        return res.json({ msg: 'Todos los campos son obligatorios' })
      }

    //encriptar contraseña
    data.password = await bcrypt.hash(data.password, 10);

    //crear el usuario
    const newUser = await UserModel.create(data)

    //crear token
    const token = jwt.sign({ _id: newUser._id }, 'secreta');

    messages.messageGeneral(res, 201, true,{...newUser._doc,password:null,token}, 'Usuario creado correctamente')
    // res.status(201).json({
    //   ok: true,
    //   message: 'usuario creado correctamente',
    //   data: { ...newUser._doc, token }
    // });
  } catch (error) {
    messages.messageGeneral(res, 500, false, '', error.message)
    // res.status(500).json({
    //   ok: false,
    //   message: error.message
    // })
  }
}

userCtrl.login = async(req, res) => {
  try {
    const data = req.body
    const existUser = await UserModel.findOne({correo:data.correo});
    if(!existUser) {

        return messages.messageGeneral(res, 400, false, '', 'El correo no existe')
        // return res.status(400).json({
        //     ok:false,
        //     message:'El usuario no existe'
        // })
    }
    const match = await bcrypt.compare(data.password, existUser.password);
    if(match) {
    //crear token
    const token = jwt.sign({ _id: existUser._id }, 'secreta');

     return messages.messageGeneral(res, 201, true,{...existUser._doc,password:null,token}, 'Bienvenido')
    // return res.status(201).json({
    //     ok: true,
    //     message: 'Bienvenido!',
    //     data: { ...existUser._doc, password:null, token }
    //   });
    }
    messages.messageGeneral(res, 400, false, '', 'La constraseña es incorrecta')
    // res.status(400).json({
    //     ok:false,
    //     message:'La contraseña es incorrecta'
    // })
  } catch (error) {
    messages.messageGeneral(res, 500, false, '', error.message)
    // res.status(500).json({
    //   ok: false,
    //   message: error.message
    // })
  }
}

export default userCtrl
