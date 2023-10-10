
import { client } from "../db.js";
import jwt from "jsonwebtoken";

export function addUsers(userInfo){
    return client
    .db("taskmon1")
    .collection("user1")
    .insertOne(userInfo)
}

export function getUser(userEmail){
    return client
    .db("taskmon1")
    .collection("user1")
    .findOne({email : userEmail})
}

export function generateJwtToken(id){
    return jwt.sign(
        {id}, 
        process.env.SECRET_KEY, 
        {expiresIn:"300d"}
        )
}