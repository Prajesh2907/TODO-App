import axios from 'axios';

const baseUrl = "http://localhost:5000"

const getAllTODO = (setTODO) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data ---> ',data)
        setTODO(data);
    })
}
const addTODO = (text,setText,setTODO) => {

    if(!text){
        alert("Please enter some text...")
    }else{
        axios
    .post(`${baseUrl}/save`, {text})
    .then((data) => {
        console.log(data);
        setText("")
        getAllTODO(setTODO)
    }).catch((err) => console.log(err))
}
    }

    

const updateTODO = (toDoId,text,setTODO,setText,setIsUpdating) => {
    axios
    .post(`${baseUrl}/update`, {_id : toDoId, text})
    .then((data) => {
        console.log(data);
        setText("")
        setIsUpdating(false)
        getAllTODO(setTODO)
    }).catch((err) => console.log(err))
}

const deleteTODO = (_id,setTODO) => {
    axios
    .post(`${baseUrl}/delete`, {_id })
    .then((data) => {
        console.log(data);
        getAllTODO(setTODO)

    }).catch((err) => console.log(err))
}

export{getAllTODO, addTODO,updateTODO,deleteTODO};

