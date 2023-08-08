import mongoose from "mongoose";

const productoSchema = mongoose.Schema({
    nombre:{
        type: String,
        trim: true, //Elimina espacion en blanco
        required: true
    },
    marca:{
        type: String,
        trim: true, //Elimina espacion en blanco
        required: true
    },
    valor:{
        type: String,
        trim: true, //Elimina espacion en blanco
        required: true
    },
    caduca:{
        type: String,
        trim: true, //Elimina espacion en blanco
        required: true
    },
})