import mongoose from "mongoose";


//create messgae schema
const messageSchema = new mongoose.Schema(
	{
		senderId: {
			type: mongoose.Schema.Types.ObjectId,  //get Id 
			ref: "User", //id from User collection 
			required: true,
		},
		receiverId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		message: {
			type: String,
			required: true,
		},
		// createdAt, updatedAt(show the time of message)
	},
	{ timestamps: true } 
);

const Message = mongoose.model("Message", messageSchema);  //pack it as a model

export default Message;
