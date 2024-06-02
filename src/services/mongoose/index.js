import mongoose from 'mongoose';
import {env} from '../../config/index.js';

mongoose.connect(`mongodb+srv://sairessy:${env.MONGO_PASS}@cluster0.bpljm3t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).catch(err => {
  console.log('MongoDB connection error');
  console.log(String(err));
});

// Models
// user
export const User = mongoose.model('User', 
  new mongoose.Schema({ 
    email: String, 
    pass: String,
    app_id: String,
    created_at: Date,
    recovery_code: Number
  }, {strict: false})
);

// machina
export const Machina = mongoose.model('Machina', new mongoose.Schema({
    label: String,
    on: Boolean
  }, {strict: false})
);