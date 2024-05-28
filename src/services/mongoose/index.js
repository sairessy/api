import mongoose from 'mongoose';
import {env} from '../../config/index.js';
mongoose.connect(`mongodb+srv://sairessy:${env.MONGO_PASS}@cluster0.bpljm3t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

// Models
const User = mongoose.model('User', { 
  email: String, 
  pass: String,
  app_id: String,
  created_at: Date
});

const Machina = mongoose.model('Machina', {
  label: String
});

export { 
  User, 
  Machina 
};