import mongoose, { Schema, models } from "mongoose"

const collectionSchema = new Schema(
  {
    collection_id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
)

const Collection = models.Collection || mongoose.model("Collection", collectionSchema, "collections")
export default Collection