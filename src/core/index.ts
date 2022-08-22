import { db } from "../db/connection"


export const core = async () => {

    await db.push("/users", {
        name: "John"
    })

    console.log({
        data: await db.getObject("/users")
    })
}