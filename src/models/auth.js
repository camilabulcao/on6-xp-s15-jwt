
const jwt = require('jsonwebtoken')
const passport = require ('passport')
const LocalStrategy = require('passport-local').Strategy
const BearerStrategy = require('passport-http-bearer').Strategy

passport.use(

    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'senha', 
        session: false
    },(email,senha, done)=>{
        //coisas a fazer para autenticar usuario
        //buscar o usuario no banco de dados 
        //const usuario = buscar no banco de dados
        //se o usuario não existir, ou estiver vazio, retornar erro "usuario inexistente"
        //se o usuário existe, compara a senha enviada na requisição com a senha do objeto usuario
        //se a senha for igual, done(null, usuario)
        //se a senha for diferente -- mensagem : 'Usuario/senha errado'

        done(null, {})

    })
);

passport.use(
    new BearerStrategy((token,done)=>{
        try{
            //Fluxo feliz
            const payload = jwt.verify(token, 'senha-secreta')
            console.log(payload); //só para verificar o payload retornando
            const usuario = {}; // = buscar no bd
            done(null,usuario, {token: token});

        
        } catch(error){
            //fluxo com erro
            done(error);
        }
        
    })
);