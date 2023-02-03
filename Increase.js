import { useState } from "react";
import useCounter from "./Hook"
 
function  Increase(){
    const {count,increment,decrease} = useCounter()
      
    return(
        <div>
            
     

            
              <p>Count:{count}</p>
             <button   onClick={decrease}>decrease</button>
            <button   onClick={increment}>increse</button>
             
       </div>
    )
}
export default Increase;