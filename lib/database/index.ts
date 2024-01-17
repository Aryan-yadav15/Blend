import mongoose from 'mongoose'
import { cache } from 'react'

let cached = (global as any).mongoose || {conn:null,promise: null}
// this global refers to global type of mongoose
const MONGODB_URI = process.env.MONGODB_URI

export const connectToDatabase = async() =>{
    if(cached.conn)
        return cached.conn
    if(!MONGODB_URI) 
        throw new Error("No mongo uri available")

    cached.promise=cached.promise || mongoose.connect(MONGODB_URI,{
        dbName: 'Blend event',
        bufferCommands:false
    })

    cached.conn=await cached.promise

    return cached.conn
}

// this is done to make the connection merw efficent as futher sever action will need to c
// connect to the database multiple times which will give stress to the database so now we are
// making the connection only once and using it multiple times by using cache as global`