const app = require("./index");

const connect = require("./configs/db")

app.listen(5000, async function () {
    try {
        await connect();
    } catch (error) {
        console.log("message:",error)
    }
    console.log("listening on port 5000");

});