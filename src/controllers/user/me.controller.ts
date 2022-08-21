import { RequestI, ResponseI } from "../../interfaces/express.interfaces";

export const meController = (req: RequestI, res: ResponseI) => {
    try {
        res.json({ success: true });
    } catch (error) {
        console.log(`🚨 - file: me.controller.ts - line 7 - meController - error`, error);
        res.status(500).json({ error: { message: "Internal server error" } });
    }
};
