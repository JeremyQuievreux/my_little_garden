import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        url_pic: {
            type: String
        },
        famille: {
            type: String
        },
        semis: {
            janvier: Boolean,
            fevrier: Boolean,
            mars: Boolean,
            avril: Boolean,
            mai: Boolean,
            juin: Boolean,
            juillet: Boolean,
            aout: Boolean,
            septembre: Boolean,
            octobre: Boolean,
            novembre: Boolean,
            decembre: Boolean,
        },
        recolte: {
            janvier: Boolean,
            fevrier: Boolean,
            mars: Boolean,
            avril: Boolean,
            mai: Boolean,
            juin: Boolean,
            juillet: Boolean,
            aout: Boolean,
            septembre: Boolean,
            octobre: Boolean,
            novembre: Boolean,
            decembre: Boolean,
        },
        price: {
            type: String
        },
        description: {
            type: String
        }
    }
);

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);