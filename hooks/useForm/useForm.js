import { useState } from "react"

function useForm(initialState = {}) {
   const [values, setvalues] = useState(initialState);

   function reset(){
       setvalues(initialState)
   }

   function handleInputChange({target}){
       setvalues({
           ...values,
           [target.name]: target.value
       });

    }
    return[values, handleInputChange, reset];
}

export default useForm
