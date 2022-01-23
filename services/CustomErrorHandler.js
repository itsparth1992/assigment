

class CustomErrorHandler extends Error {
   
    constructor(status ,msg){
        super() ;
        this.status= status;
        this.message=msg

    }
    static alreadyExist(message){
        return new CustomErrorHandler({status:409,message});
    }
    static WrongCredentials(message="Username and Password is Wrong"){
        return new CustomErrorHandler(401,message);
    }
    static unAuthorized(message="unAuthorized"){
        return new CustomErrorHandler({status:401,message});
    }
    static notFound(message="404 Not Found!"){
        return new CustomErrorHandler({status:404,message});
    }
    static serverError(message="Internal server Error"){
        return new CustomErrorHandler({status:500,message});

    }
}
module.exports = CustomErrorHandler;