import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'

const dbInitialization = new JsonDB(new Config("./src/db/data/todo-db", true, true, "/", true));

dbInitialization.push("/users", {
    name: "John"
})

export const db = dbInitialization;