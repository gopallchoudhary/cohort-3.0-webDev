import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { z } from "zod";
const app = express();
const PORT = 3001;
app.use(express.json());

// auth
import { auth, JWT_SECRET_KEY } from "./middlewares/auth.js";

// databases
import { User, Todo } from "./models/db.js";

//.sign up
app.post("/signup", async function (req, res) {
    const requiredBody = z.object({
        name: z.string().min(3).max(100),
        email: z.string().min(3).max(100).email(),
        password: z
            .string()
            .min(3)
            .max(100)
            .regex(/[A-Z]/)
            .regex(/[a-z]/)
            .regex(/[1-9]/)
            .regex(/[!@#$%&*]/),
    });

    //const parseData = requiredBody.parse(req.body)
    const parseDataWithSuccess = requiredBody.safeParse(req.body);

    if (!parseDataWithSuccess.success) {
        res.json({
            message: "Incorrect format",
            error: parseDataWithSuccess.error
        });
        return;
    }

    const { name, email, password } = req.body;
    try {
        //! hashed password
        const hashedPassword = await bcrypt.hash(password, 10);

        //! create user
        const user = await User.create({
            name: name,
            email: email,
            password: hashedPassword,
        });
    } catch (error) {
        return res.json({
            message: "User already exists",
        });
    }

    res.json({
        message: "You are signed up",
    });
});

//.sign in
app.post("/signin", async function (req, res) {
    const { email, password } = req.body;

    const response = await User.findOne({ email });

    if (response) {
        const isPasswordCorrect = await bcrypt.compare(password, response.password);
        if (isPasswordCorrect) {
            const token = jwt.sign({ id: response._id.toString() }, JWT_SECRET_KEY);

            res.json({
                message: "You are signed in",
                token,
            });
        } else {
            res.json({
                message: "Wrong Password",
            });
        }
    } else {
        res.status(403).json({
            message: "Invalid credentials",
        });
    }
});

//.create-todo
app.post("/todo", auth, async function (req, res) {
    const userId = req.userId;
    const { title, done } = req.body;

    const todo = await Todo.create({
        userId,
        title,
        done,
    });

    res.json({
        message: "Todo created",
    });
});

//.show-todo
app.get("/todos", auth, async (req, res) => {
    const userId = req.userId;

    const todos = await Todo.findOne({ userId }).populate("userId");
    res.json({
        todos,
    });
});

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
