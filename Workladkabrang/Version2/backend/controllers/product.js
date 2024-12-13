const product = require('../Models/product');

exports.read = async(req,res) =>{
    try{
        const id = req.params.id;
        const producted = await product.find({_id:id}).exec();
        res.send(producted);
    }catch(err){
        res.status(500).send('Server Error');
    }
}

exports.list = async(req,res) =>{
    try{
        const producted = await product.find({}).exec();

        res.send(producted);
    }catch(err){
        res.status(500).send('Server Error');
    }
}

exports.create = async(req,res) =>{
    try{
        const producted = await product(req.body).save();
        res.send(producted)
    }catch(err){
        res.status(500).send('Server Error');
    }
}

exports.update = async(req,res) =>{
    try{
        const id = req.params.id;
        const updated = await product.findOneAndUpdate({_id:id} , req.body , { new : true }).exec();
        res.send(updated);
    }catch(err){
        res.status(500).send('Server Error');
    }
}

exports.remove = async(req,res) =>{
    try{
        const id = req.params.id;
        const removed = await product.findOneAndDelete({_id:id}).exec();
        res.send(removed);
    }catch(err){
        res.status(500).send('Server Error');
    }
}