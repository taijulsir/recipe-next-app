import mongoose, { Schema } from "mongoose";

const recipeSchema =  new Schema (
    {
        title: String,
        ingredients: String,
        instruction: String,
        photo: String
    },
    {
        timestamps:true
    }
)

const Recipe = mongoose.model("Recipe",recipeSchema)
export default Recipe;
