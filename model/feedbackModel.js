import mongoose from 'mongoose'

const feedbackSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required: true
    },
    course:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
    },
    comments:{
        type:String
    },
    createdAt:{
        type:Date
    }
})

export default mongoose.model("feedbacks", feedbackSchema)