import mongoose, {Schema} from "mongoose";

const prompt = new Schema({
          prompt: {
                    type: String,
                    required: true,
          },
          response: {
                    type: String,
                    required: true,
          }
},{timestamps: true});

export const Prompt = mongoose.model("Prompt", prompt);