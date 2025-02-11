import mongoose, { Types } from "mongoose"
import { unique } from "next/dist/build/utils"

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique:true
    },

    password: {
        type: String,
        required: true
    },

},
{ timestamps: true }
)

export default mongoose.models.User || mongoose.model("User", userSchema);

