import { initSever } from "./app";

const app = initSever();

app.listen(5000, () => {
    console.log("Server running on port: ", 5000);
});
