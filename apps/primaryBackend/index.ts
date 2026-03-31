import express from "express";
import cors from "cors";
import { userSignupSchema } from "./userSchema";
import  { prisma } from "db";

const app = express();
const port = process.env.PORT || 3000;
const auth = "v1/user/auth";

app.use(express.json())
app.use(cors())

app.listen(port, () => {
    console.log(`${port}`)
})