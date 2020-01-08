var express= require("express")
var products=require('./model/products')
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var url="mongodb://127.0.0.1:27017/minipro";
const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
mongoose.connect(url, function (err){
    if (err) throw err
    else {
        console.log("connection established")
    }

})
app.get("/data", function (req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

products.find({},function(err,result){
    if (err) throw err
    else {
        res.send(result)
    }
})
})
app.post("/insert",function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
console.log(req.body);
    var prd=new products();
    prd.dress=req.body.dress;
    prd.brand=req.body.brand;
    prd.prize=req.body.prize;
   
    prd.save(function(err){
        if (err) throw err
        else{
            res.send({msg:"data inserted"})
        }
    })
})



var accounts=[];

    app.get('/accounts/login',(req,res)=>{
        res.render("login.ejs",{title:'LOGIN'});
    })

    app.get('/accounts/signup',(req,res)=>{
        res.render('signup.ejs',{title:'SIGN UP'})
    })

    app.post('/accounts/validate-login',(req,res)=>{
        var flag =-1;
        var login = req.body;
        console.log(login);
        
        for(var i=0;i<accounts.length;i++){
            if(login.username == accounts[i].username && login.password == accounts[i].password){
                res.send("Logged into "+accounts[i].username);
               
                flag = 0;
                console.log(flag+" = flag")
                
            }
        }
         if(flag == -1){
            res.send("Error, No such user");        }    
    })

    app.post('/accounts/validate-signup',(req,res)=>{
        var details = req.body;
        if(details.password == details.re_password){
            accounts.push(details);
        }
        
        console.log(accounts);
        console.log(accounts.length);
        res.render("index.ejs",{nav,title:'Library Management System'})
    })


app.listen(8000,function(){
    console.log("server started Listening port 8000......");
});



