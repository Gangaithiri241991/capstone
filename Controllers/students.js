import { ObjectId } from "bson";
import { client } from "../db.js";


export function getAllStudents(req){
    return client 
     .db("taskmon1")
    .collection("students1")
    .find(req.query)
    .toArray();
}

export function getStudentsById(id){
    return client
    .db("taskmon1")
    .collection("students1")
    .findOne({_id: new ObjectId(id)})
}

export function addStudentsData(data){
  return client
  .db("taskmon1")
  .collection("students1")
  .insertOne(data)

}

export function updateStudentData(id, updatedData){
    return client
    .db("taskmon1")
    .collection("students1")
    .findOneAndUpdate({_id: new ObjectId(id)},{$set:updatedData})
}

export function deletaStudentsData(id){
    return client
  .db("taskmon1")
  .collection("students1")
  .deleteOne({_id: new ObjectId(id)})
}



















 