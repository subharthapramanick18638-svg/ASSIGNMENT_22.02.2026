
class HomeController{

    homepage(req,res){
        res.render('index')
    }
    loginpage(req,res){
        res.render('login')
    }
}

module.exports= new HomeController()