import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import {connectDB} from './connect-db'
import './initialize-db';
import {authenticationRoute} from "./authenticate";
import path from 'path';

let port = 7777;

let app = express();

app.listen(port,console.log("Server listening on port", port));

app.use(
    cors(),
    bodyparser.urlencoded({extended:true}),
    bodyparser.json()
);

authenticationRoute(app);

export const addNewTask = async task=>{
    let db = await connectDB();
    let collection = db.collection(`tasks`);
    await collection.insertOne(task)
}

export const updateTask = async task =>{
    let {id, group, isComplete, name } = task;
    let db = await connectDB();
    let collection = db.collection(`tasks`);

    if(group){
        await collection.updateOne({id},{$set:{group}})
    }
    if(name){
        await collection.updateOne({id},{$set:{name}})
    }
    if(isComplete !== undefined){
        await collection.updateOne({id},{$set:{isComplete}})
    }

}
app.post('/task/new',async (req,res)=>{
    await addNewTask(req.body.task);
    res.status(200).send();
});

app.post('/task/update', async(req,res)=>{
   let task = req.body.task;
   await updateTask(task);
   res.status(200).send();
});