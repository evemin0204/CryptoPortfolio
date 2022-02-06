import { Document, Model, model, Schema } from "mongoose";

export interface IUser extends Document {
    username: string;
    password: string;
}

const userSchema: Schema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const User: Model<IUser> = model("User", userSchema);

export default User;