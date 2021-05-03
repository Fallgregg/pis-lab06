// const http = require("http");

// http.createServer((request,  response) => {
//     if(request.url === "/is-93-006"){
//         response.end("Zabilska Valerie 2 course group IS-93"); 
//     } else{
//         response.end("Unknown error");
//     }
// }).listen(3000, () => {
//     console.log("Port 3000");
// });
const http = require("http");

http.createServer((request,  response) => {
    if(request.url === "/is-93-006"){
        response.end("Zabilska Valerie \n2 course \ngroup IS-93"); 
    } else{
        response.end("Unknown error");
    }
}).listen(3000, () => {
    console.log("Port 3000");
});