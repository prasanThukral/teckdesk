const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0/softwareCentre',{ useNewUrlParser: true,
useCreateIndex: true,
useFindAndModify: false,
useUnifiedTopology: true,
}).then(console.log('connected to the mongodb'))

const schema = mongoose.Schema(
    {
        Id:{
            type:Number,
            unique:true,
            required:true,
        },
        Name:{
            type:String,
            required:true,
        },
        Complaint:{
            type:String,
            required:true,
        },
        Description:{
            type:String,
        }
    },
    {
        timeStamps:{
            createdAt:true,
            updatedAt:true, 
        }
    }
)

const repo = mongoose.model('repo', schema);

repo.deleteMany({},(error)=>{
    console.log('collection removed')
})

module.exports = repo;