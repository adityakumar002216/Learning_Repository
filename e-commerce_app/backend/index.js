import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bcrypt from 'bcryptjs';

const app = express();
app.use(express.json());
app.use(cors());

(async () => {
    try {
        const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/E_commerce';  // Use env variable for MongoDB URI
        await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to E_commerce database');
    } catch (err) {
        console.error('Database connection failed:', err.message);
    }
})();

// User Schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Create index to ensure email is unique
UserSchema.index({ email: 1 }, { unique: true });

const User = mongoose.model('users', UserSchema);

// Routes
app.get("/", (req, res) => {
    res.send("App is Working");
});

app.get("/users", async (req, res) => {
    try {
        const users = await User.find();  
        res.status(200).json(users);
    } catch (e) {
        console.error("Error:", e);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Login Route
app.post('/login', async (req, res) => {
    try {
        console.log(req.body);
      const {email,password}=req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });  // Clear error message
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Incorrect password' });
        }

        res.status(200).json({
            success: true,
            message: 'Login successful',
            user: { email: user.email, name: user.name }
        });

    } catch (e) {
        console.error("Error:", e);
        res.status(500).json({ message: 'Something went wrong, please try again later' });
    }
});

// Register Route
app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = new User({
            name,
            email,
            password: hashedPassword,
        });

        // Save the user
        const result = await user.save();
        const userResponse = result.toObject();
        delete userResponse.__v;  // Remove __v field
        delete userResponse._id;  // Optionally remove _id if not needed

        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            user: userResponse
        });

    } catch (e) {
        console.error("Error:", e);
        res.status(500).json({ message: 'Something went wrong, please try again later' });
    }
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
