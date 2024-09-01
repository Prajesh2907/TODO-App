const TODOModel = require("../models/TODOModel")

module.exports.getTODO = async (req,res) => {
    const todo = await TODOModel.find()
    res.send(todo)
}

module.exports.saveTODO = async (req,res) => {

    const {text} = req.body
    console.log('ghhh');
    TODOModel
       .create({text})
       .then((data) => {
        console.log("Added Successfully...");
        console.log(data)
        res.send(data) 
      })
}

module.exports.updateTODO = async (req,res) => {
    const{_id,text} = req.body
    TODOModel
    .findByIdAndUpdate(_id,{text})
    .then( () => res.send("Successfully updated..."))
    .catch((err) => console.log(err))

}

module.exports.deleteTODO = async (req,res) => {
    const{_id} = req.body
    TODOModel
    .findByIdAndDelete(_id)
    .then( () => res.send("Successfully deleted..."))
    .catch((err) => console.log(err))

}

