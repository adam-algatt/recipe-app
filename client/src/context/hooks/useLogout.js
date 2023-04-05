import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    // clear user data from local storage
    localStorage.removeItem('userInfo')

    // logout through authContext reducer
    dispatchEvent({ type: 'LOGOUT' })
  }
  return { logout }
}



