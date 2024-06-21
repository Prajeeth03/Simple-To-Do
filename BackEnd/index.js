const express = require("express")
const app = express();
const PORT = 3005;
app.use(express.json);

app.get('/hi', (req,res)=>{
    res.send("Hello");
});

app.listen(PORT, () =>{
    console.log("Backend server is running in port "+PORT);
});