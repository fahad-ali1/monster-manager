import mongoose from 'mongoose';

const CounterSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    seq: { type: Number, unique: true }
});

const Counter = mongoose.model('Counter', CounterSchema);

export default Counter;