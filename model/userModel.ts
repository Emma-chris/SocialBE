import { Document, model, Schema, Types } from "mongoose";

interface iUser {
  email: string;
  password: string;
  userName: string;
  avater: string;
  avaterID: string;
  post: Array<{}>;
}

interface iUserData extends iUser, Document {}

const userModel = new Schema<iUserData>(
  {
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    userName: {
      type: String,
    },
    avater: {
      type: String,
    },
    avaterID: {
      type: String,
    },
    post: [
      {
        type: Types.ObjectId,
        ref: "posts",
      },
    ],
  },
  { timestamps: true }
);

export default model<iUserData>("users", userModel);
