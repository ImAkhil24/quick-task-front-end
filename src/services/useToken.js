import jwtDecode from "jwt-decode";
import { useState } from "react";

const useToken = () => {
  const getDecodedToken = () => {
    let tokenString = sessionStorage.getItem('jwtToken');
    if(tokenString === null)
      return tokenString;

    tokenString = jwtDecode(tokenString);
    return tokenString;
    
  }

  // managing token state which will hold the decoded token
  // in case of notoken it'll hold null
  const [token, setToken] = useState(getDecodedToken());
  
  // in case of logout jwtToken will be undef. and token will be set to undef.
  const saveToken = (jwtToken) => { 
    if(!jwtToken){
      sessionStorage.removeItem('jwtToken');
      setToken(null);
    }else{
      sessionStorage.setItem('jwtToken', jwtToken);
      setToken(jwtDecode(jwtToken));
    }
  }

  return {token, setToken: saveToken};
}

export default useToken;