const app = require("./index");

const connect = require("./configs/db");

app.listen(5000, async() => {
    try {
        await connect();
    } catch (error) {
        consolee.log(err);
    }

    console.log("listening on port 5000")
})