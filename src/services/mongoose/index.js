import mongoose from 'mongoose';
import {env} from '../../config/index.js';

mongoose.connect(`mongodb+srv://sairessy:${env.MONGO_PASS}@cluster0.bpljm3t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).catch(err => {
  console.log('MongoDB connection error');
  console.log(String(err));
});

// Models
// user
export const User = mongoose.model('User', { 
  name: String,
  email: String, 
  pass: String,
  app_id: String,
  created_at: Date,
  recovery_code: Number
});

// machina
export const Lock = mongoose.model('Lock', {
  label: String,
  locked: Boolean
});

export const Lamp = mongoose.model('Lamp', {
  label: String,
  on: Boolean
});