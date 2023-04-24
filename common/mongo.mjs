import { MongoClient } from "mongodb";

const URI = process.env.VITE_MONGODB_URL;

const options = {
  min: 1,
  max: 10,
};

const factory = {
  create: async () => {
    const mongoclient = new MongoClient(URI, {});
    await mongoclient.connect();
    return mongoclient;
  },

  destroy: async (client) => {
    await client.close();
  },
};

export const MongoPool = createPool(factory, options);
