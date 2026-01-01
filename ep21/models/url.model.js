import mongoose from "mongoose";

const urlSchema = mongoose.Schema({
    short_code: {
        type: String,
        required: true,
        unique: true,
        // can add index
    },
    original_url: {
        type: String,
        required: true,
    },
    click_count: {
        type: Number,
        default: 0,
        min: 0
    },
    is_active: {
        type: Boolean,
        default: true
    },
    expires_at: {
        type: Date,
        default: null
    },
    last_accessed_at: {
        type: Date,
        default: null
    },
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
});

export default mongoose.model("Url", urlSchema);