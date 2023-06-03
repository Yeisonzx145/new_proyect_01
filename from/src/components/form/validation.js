const validation = (userData,errors) => {
    const error = {...errors}
    //validacion de usuario
    if(!userData.username){
        error.username = '*';
     }else if(!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(userData.username)){
        error.username = '*';
    }else if(userData.username.length > 35){
        error.username = '*';
    }
    else {
        error.username = '';
    }

    //validacion de su contraseña
    if(userData.password.length < 6 || userData.password.length > 15) {
        error.password = '*';
    } else if(!/\d/.test(userData.password)){
        error.password = '*';
    } else error.password = '';
    
    return error;
}

export default validation;