
const http=require("http");


const userData = [
{
name: "Anil",
age: 30,
email: "anil@test.com",
},
{
name: "sam",
age: 20,
email: "sam@test.com",
},
{
name: "peter",
age: 30,
email: "peter@test.com",
},
];

http.createServer((req , res)=>{
    res.setHeader("Content-type" ,"application/json") //telling the browser that we are sending json data
    res.write(JSON.stringify(userData));
    console.log(req.url); // Log the requested URL
    console.log(req.headers); // Log the request headers
    console.log(req.headers.host); // Log the host
    console.log(req.method);
    console.log("User data sent...")
    res.end(); //ending the response
}).listen(3000 , ()=> console.log("Server listen to port 3000"))
