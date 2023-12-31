import jwt from "jsonwebtoken"
export async function isAuthenticated(req, res, next){
    const token = req.headers["x-auth-token"];
    if(!token){
      return res.status(400).json({data:"Inavalid Authorization"})
     }
    jwt.verify(token, process.env.SECRET_KEY)
    next();
}