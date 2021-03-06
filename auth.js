const jwt = require('jsonwebtoken');

const app_secret = "myappsecret";
const username = "admin";
const password = "secret";

module.exports = function (req ,res ,next)
{
    if(req.url === '/login' && req.method == 'POST')
    {
        if(req.bosy.username === username && req.bosy.password ===password)
        {
            let token = jwt.sign({ data : username , expiresIn  :'1h'} , app_secret);
            res.json({success : true , token : token}) ;
        }
        else {
            res.json({ success : false}) ;
        }
        res.end();
        return ;
    
}
else{
    if( (req.url.startWith("/products")) || req.url.startWith("/categories") && (req.method!='')  )
    {
        let token = req.headers['authorization']
        if(token !=null &&token.startWith('Bearer<'))
        {
            token = token.substring(7,token.length);
            try {
                jwt.verify(token,app_secret);
                next();
                return  ;
            }
            catch (err){}
        }
        res.statusCode = 401;
        res.end()
        return ;
    }
}
next();
}
