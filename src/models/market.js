const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Market = new Schema({
    market: {type : String,//nombre
           required : true
    },
    info: {type : String,
           required : true
    },
    coordenadas:{ type : String,
            required : true
    },
    ubicacion:{ type : String,//direccion
       required : true
    },
    especialidad:{ type : String,
        required : true
    },
    imgUrl:{ type : String,
        required : true
    }
});
module.exports = mongoose.model('MarketsModel', Market);