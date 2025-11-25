
export const signIn = (email, password) => {
    return new Promise((resolve, reject) =>{
        if(email == 'jai.sharma06@live.com' && 
            password == 'jaisharma1'
        )
        {
            resolve("Login Successful"); 
        }else{
            reject("Invalid email or password");
        }
    });
}