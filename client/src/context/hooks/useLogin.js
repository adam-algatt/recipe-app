import {
    useState
} from "react";
import {
    useAuthContext
} from "./useAuthContext";

export const useLogin = () => {

    const [loginError, setLoginError] = useState('');
    const [loginLoading, setLoginLoading] = useState(false);
    const {
        dispatch
    } = useAuthContext()

   const login = async (email, password) => {
        setLoginLoading(true)

        const response = await fetch('api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        const json = await response.json()

        if (!response.ok) {
            setLoginLoading(false)
            setLoginError(json.error)
        }

        if (response.ok) {
            localStorage.setItem('userInfo', JSON.stringify(json))

            //use Auth Context reducer
            dispatch({
                type: 'LOGIN',
                payload: json
            })
            setLoginLoading(false)
        }

    }
    return { login, loginLoading, loginError }
}

