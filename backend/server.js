const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const userModel = require('./models/user');
const nodemailer = require('nodemailer');

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const SECRET_KEY = process.env.JWT_SECRET_KEY;


// Connect to MongoDB
mongoose.connect(process.env.URI)
    .then(() => {
        console.log("Connected Successfully to MongoDB");
        app.listen(process.env.PORT || 8000, (err) => {
            if (err) throw err;
            console.log("Server is running at", process.env.PORT);
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB", error);
        process.exit(1);
    });

const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 3000,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    },
})

app.get('/', function (req, res) {
    res.send('Welcome to Sneaker Head');
});

//Register Page
app.post('/register', async (req, res) => {
    const { fullname, email, password } = req.body;

    let user = await userModel.findOne({ email: email });
    if (user) {
        return res.status(400).json({ message: "User Alread exists" });
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        await userModel.create({
            fullname,
            email,
            password: hash
        });

        //Sending mail if the user is successfully registered
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Welcome to Sneaker Head',
            text: `Hi ${{ fullname }},
         Welcome to Sneaker Head!
        Thank you for signing up with Sneaker Head!
        
        Best regards,
        The Sneaker Head Team`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ message: "Failed to send email" });
            }
            console.log('Email sent: ', info.response);
        });

        res.status(201).json({ message: "User registered" });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }

})

//Login Page
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await userModel.findOne({ email: email });
        if (user) {
            // Compare the provided password with the hashed password in the database
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: "Invalid credentials" });
            }

            // Generate a JWT token
            const token = jwt.sign(
                {
                    email: user.email,
                    userId: user._id
                },
                SECRET_KEY,
                { expiresIn: '1h' }
            );

            // Optionally, you can set the token in a cookie
            res.cookie('token', token, { httpOnly: true });

            res.status(200).json({ message: "ok", user: user });
        } else {
            res.status(400).json({ message: "Invalid credentials" });
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});


// Logout Button 
app.post('/user/logout', function (req, res) {
    res.clearCookie('token');
    res.status(200).json({ message: "Logged out" }); // OK status code
});

// function to allow only logged in user to do things on the page
function isLoggedIn(req, res, next) {
    if (!req.cookies.token) {
        return res.status(403).json({ message: "Access denied. Please log in." }); // Forbidden status code
    }

    try {
        const data = jwt.verify(req.cookies.token, SECRET_KEY);
        req.user = data; // Add user data to request object
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid or expired token", cookie: req.cookies }); // Forbidden status code
    }
}