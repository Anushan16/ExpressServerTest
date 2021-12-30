// Initialize required packages
const express = require('express')
const bodyParser = require("body-parser");


// call packages
const app = express();
app.use(bodyParser.urlencoded({extended: true}))


app.get("/", function(req,res){
    // in order to avoid complications utilizing relative path 
   res.sendFile(__dirname + "/index.html")
})

app.post("/", function (req,res) {
    let wt = Number(req.body.weight)
    let ht= Number(req.body.height)

    
    
    function bmiCalc (weight, height) {
        var bmi = Math.round(weight/heightC(height));
        return(bmi)
        
        }
        
        function heightC(h) {
            var ans = h * h 
            return ans
        }

    res.send("Your bmi is " + bmiCalc(wt,ht))
})
// indication server has started
app.listen(3000, function() {
    console.log("Server has started on port 3000...")
});

