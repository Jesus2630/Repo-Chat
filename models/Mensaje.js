const {model,Schema} = require('mongoose');


const mensajeSchema = Schema({

    de:{
        type: Schema.Types.ObjectId,
        ref: 'Usuarios',
        required: true
    },
    para:{
        type: Schema.Types.ObjectId,
        ref: 'Usuarios',
        required: true
    },
    mensaje:{
        type:String,
        required: true
    }
},{
    timestamps: true
}) 

mensajeSchema.method('toJSON', function(){
    const {__v , ...object} = this.toObject();
    return object;
})


module.exports = model('Mensajes', mensajeSchema);