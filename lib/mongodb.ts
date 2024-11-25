import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || 'your-mongodb-connection-string';

if (!MONGO_URI) {
  throw new Error('Please define the MONGO_URI environment variable in .env.local');
}

export async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) {
    // Already connected
    return mongoose.connection;
  }
  return mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as any);
}
