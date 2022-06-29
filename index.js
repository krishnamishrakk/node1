const http=require('http')
const server=http.createServer(function(req,res){
    res.write("<h1>  STARTING AND CREATING THE FIRST SERVER </h1>")
    res.write("NORMAL TEXT HERE")
    res.write(JSON.stringify({Name:"KRISHNA MISHRA"}))
    res.end("<h3>server is ending here</h3>")
})
server.listen(3300);