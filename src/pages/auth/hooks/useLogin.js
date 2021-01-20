import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  function signIn(email, password) {
    setError(null);
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((serverResponse) => {
        setLoading(false);
        setResponse(serverResponse);
      })
      .catch((serverError) => {
        setLoading(false);
        setError(serverError);
      });
  }
  return {loading,error,response,signIn}
}
