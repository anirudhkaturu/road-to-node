import mongoose from "mongoose";

const urlSchema = mongoose.Schema({
    short_code: {
        type: String,
        required: true,
        unique: true,
        // can add indexing later in the future
    },
    original_url: {
        type: String,
        required: true,
    },
    click_times: {
        type: [Date],
        default: []
    }
});

export default mongoose.model("Url", urlSchema);