import mongoose from "mongoose";

const MonsterSchema = new mongoose.Schema(
    {
      id: { type: Number, unique: true},
      name: { type: String, required: true },
      username: { type: String },
      email: { type: String },
      address: {
        street: { type: String },
        suite: { type: String },
        city: { type: String },
        zipcode: { type: String },
        geo: {
          lat: { type: String },
          lng: { type: String }
        }
      },
      phone: { type: String },
      website: { type: String },
      company: {
        name: { type: String },
        catchPhrase: { type: String },
        bs: { type: String }
      },
      image_url: { type: String, required: true }
    },
    { timestamps: true, strictQuery: true }
  );

const monster = mongoose.model("Monster", MonsterSchema);

export default monster;