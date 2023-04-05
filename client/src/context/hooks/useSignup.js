import {
    useState
} from "react";
import {
    useAuthContext
} from "./useAuthContext";

export const useSignup = () => {

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const {
        dispatch
    } = useAuthContext()

    const signup = async (name, email, password) => {
        setLoading(true)

        const response = await fetch('api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
        const json = await response.json()

        if (!response.ok) {
            setLoading(false)
            setError(json.error)
        }

        if (response.ok) {
            localStorage.setItem('userInfo', JSON.stringify(json))

            //use Auth Context reducer
            dispatch({
                type: 'LOGIN',
                payload: json
            })
            setLoading(false)
        }

    }
    return { signup, loading, error }
}