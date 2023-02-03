  import { useContext, useState } from "react"
  function useCounter(){
    const [ count,setCount]  = useState(0)

    function increment(){
        setCount(prevCount => prevCount+1)
    }
    function decrease(){
        setCount(prevCount => prevCount - 1)
    }
    return {count,increment,decrease}

}
export default useCounter;