import axios from 'axios';
import { useDispatch } from 'react-redux';
import { mailActions } from './Dataget-Slice';
if(!localStorage.getItem('email')){
    localStorage.setItem('email',"");
}

let email = localStorage.getItem('email').replace('@','').replace('.','')

export const addingMail = (obj)=>{
    return async(dispatch)=>{
        const addmail = async ()=>{
            try{
                const res = await axios.post(
                    `https://mailbox-client-8738c-default-rtdb.firebaseio.com/${email}.json`,obj
                );
                return res.data;
            }catch(error){
                console.log(error)
            }
        };
        const id = await addmail();
        const temp = {id:id,...obj};
        dispatch(mailActions.addmail(temp));
    }
}
