const express = require("express");
const app = express();
let user={
    name:"zwc",
    age:16
}
let str=JSON.stringify(user)
app.all("/", (request, response) => {
    response.setHeader("Access-Control-Allow-Origin","*")
    response.setHeader("Access-Control-Allow-Header","*")
    response.send(str);
});
// app.post("/", (request, response) => {
//     response.setHeader("Access-Control-Allow-Origin","*")
//     response.send("hello,zwc，post");
// });
app.listen(8000, () => {
    console.log("8000端口监听中");
});

