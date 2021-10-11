import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { fetchUser } from "../../actions/userActions";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorFlg, setErrorFlg] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const { user, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      setEmail("");
      setPassword("");
      setErrorFlg((prev) => !prev);
    }
  }, [error]);

  useEffect(() => {
    if (user) {
      history.push("/chatlist");
    }
  }, [user]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    setErrorFlg(false);
    dispatch(fetchUser({ email, password }));
  };

  return (
    <>
      <form onSubmit={handlerSubmit}>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
        <button type='submit'>Login</button>
      </form>
      {
        errorFlg &&
        (<div>
          ERROR: Wrong Email or Password
        </div>)
      }
    </>
  )
}

export default Auth;