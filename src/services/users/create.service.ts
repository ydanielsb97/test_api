import { db } from "../../db/connection";
import { ResServiceI } from "../../interfaces/services.interface";
import { UserI } from "../../interfaces/user.interface";

export const createUserService = async (data: UserI): Promise<ResServiceI<UserI>> => {
    try {
        const checkIFExists = await db.getObject(`/users/${data.userName}`);

        if (checkIFExists) return { error: { message: "Username already exists", code: 500 } };

        const newData: UserI = {
            ...data,
            updatedAt: new Date(),
            createdAt: new Date(),
        };

        await db.push(`/users/${data.userName}`, newData);

        return {
            data: newData,
        };
    } catch (error) {
        console.log(`🚨 - file: create.service.ts - line 8 - createUserService - error`, error);
        return { error: { message: "Internal server error", code: 500 } };
    }
};
