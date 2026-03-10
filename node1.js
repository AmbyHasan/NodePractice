const http=require("http");

http.createServer((req, res) => {
  res.write("<h1>Hello World</h1>")
  res.end("Server is running");  //ye end likhna bht zaroori hota hai , agar ye nhi likhoge to response end hoyega hi nhi
  console.log("Amber Hasan")
}).listen(4800, () => {
  console.log("Server listening on port 4800");
});



//we can create two servers in a single file.. They just need to run on different ports
