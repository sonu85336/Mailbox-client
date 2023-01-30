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
                    `https://mailbox-client-8738c-default-rtdb.firebaseio.com/emails.json`,obj
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
export const fetchingAllData = ()=>{
    return async (dispatch)=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get(
                    `https://mailbox-client-8738c-default-rtdb.firebaseio.com/emails.json`
                );
             
                const loadedMail = [];
                for(const key in res.data){
                    loadedMail.push({
                        id:key,
                        from:res.data[key].from,
                        message:res.data[key].message,
                        subject:res.data[key].subject,
                        to:res.data[key].to,
                    })

                    // if(email=== res.data[key].to){
                    //      return loadedMail;
                    // }
                   
                    
                   
                   
                }

                return loadedMail;

            }catch(error){
                console.log(error)
            }
        };
        const data = await fetchData();
        dispatch(mailActions.fetchAllexpenses(data));
    }
}



