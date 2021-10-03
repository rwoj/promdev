import express, { Request, Response } from "express";

const router = express.Router();

router.get("/api/hello",
    async (req: Request, res: Response) => {
        res.send({ "myRes": "heja tu ja" })
    })

export { router as indexRoute }