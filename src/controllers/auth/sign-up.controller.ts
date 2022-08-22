import { Response } from "express";
import { RequestI } from "../../interfaces/express.interfaces";

export const SignUpController = (req: RequestI, res: Response) => {

    try {
        
        

        res.json({ success: true });

    } catch (error) {
        console.log(`🚨 - file: sign-in.controller.ts - line 9 - SignInController - error`, error);
        res.status(500).json({ error: { message: "Internal server error"} });
    }
}