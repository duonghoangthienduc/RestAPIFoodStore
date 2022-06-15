const TagModel = require('../models/tag.model');

exports.getAllTag = (req, res)=>{
    TagModel.getAll((err,tag)=>{
        if(err){
            res.send(err);
        }
        else{
            console.log('Data found');
            res.send(tag);
        }
    })
}
exports.GetTag = (req, res)=>{
    TagModel.getById(parseInt(req.params.id) ,(err, tag)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(tag);
        }
    })
}
exports.AddTag = (req, res)=>{
    try {
        const tagData = new TagModel(req.body);
        if(req.body.constructor === Object && Object.keys(req.body).length ==0)
            throw new Error("Please fill data");
        else{
            TagModel.addTag(tagData, (err, tag)=>{
                if(err) throw err;
                else{
                    return res.status(200).send({message:'Add success'});
                }
        })
    }
    } catch (error) {
        res.status(400).send({error: error.message});
    }  
}
exports.UpdateTag = (req, res)=>{
    try {
        const tagData = new TagModel(req.body);
        console.log(tagData);
        if(req.body.constructor === Object && Object.keys(req.body).length ==0)
            throw new Error("Please fill data");
        else{
            TagModel.updateTag(req.params.id,tagData, (err, tag)=>{
                if(err) throw err;
                else{
                    return res.status(200).send({message:'Updated data success'});
                }
        })
    }
    } catch (error) {
        return res.status(400).send({error: error.message});
    }
}  
