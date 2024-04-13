const repo = require('../Models/schema')


exports.createTicket = async(req,res)=>{
    try{
        if(req.body.Name===null){
            throw new Error("Pls Enter a valid name");
        }
        
            const id = (await repo.find({})).length+1000;
            const loader = await repo.create({
                Id:id,
                Name:req.body.Name,
                Complaint:req.body.Complaint,
                Description:req.body.Description,
            });
            res.status(200).json({
                status:'Appended into DB',
                data: {
                    loader
                },
            })    
    }catch(error){
        console.log(error)
        res.status(400).json({
            status:'failed',
            data:{
                error
            }
        })
    }
}
exports.getAllTickets = async(req,res)=>{
    try{
        const alldefect = await repo.find({},{ _id: 0, __v: 0 });
        if(alldefect.length>0){
            res.status(200).json({
                status:'success',
                data:{
                    alldefect
                }
            })
        }else{
            res.status(200).json({
                status:'success',
                message:'There is no defect logged as of yet'
            })
        }
    }catch(error){
        console.log(error)
    }
}
exports.getSpecificTicket = async(req,res)=>{
    try{
        const defect = await repo.find({Name :req.params.Name},{ _id: 0, __v: 0 })
        if(defect.length===0){
            throw new Error("Pls enter a valid name")
        }
        res.status(200).json({
            status:'success',
            data:{
                defect
            }
        })
    }catch(error){
        console.log(error)
        res.status(400).json({
            status:error.message,
            
        })
    }
}
exports.deleteTicket  = async(req,res)=>{
    try{
        const deletedItem = await repo.deleteOne({Id:req.params.Id});
        if(deletedItem===null)
        throw new Error('The following Id does not exist');

        res.status(200).json({
            status:'success',
            data:{
                deletedItem
            }
        })
    }catch(error){
        console.log(error)
        res.status(400).json({
            status:'failure',
            data:{
                error
            }
        })
    }
}

