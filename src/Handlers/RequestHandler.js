
import User from '../models/user/User'

export const signIn = (email, password) => {
    return new Promise((resolve, reject) =>{
        if(email.toLowerCase() === 'jai.sharma06@live.com' && 
            password === 'jaisharma1'
        )
        {
            let localUser = new User(1, 'Jai Sharma', 'jai.sharma06@live.com');
            resolve(localUser); 
        }else{
            reject("Invalid email or password");
        }
    });
}