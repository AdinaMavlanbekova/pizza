import { useState } from "react";
import { useDispatch } from "react-redux";
import Api from "../../api/Api";
import { authAC, setAuthAC } from "../../redux/actionCreators";
import css from "./Admin.module.css";

export default function Admin() {
const [login, setLogin] = useState("");
const [password, setPassword] = useState("");
const [passwordType, setPasswordType] = useState("");

const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();
        // Api.auth({
        //     login: login,
        //     password: password,
        // })
        // .then((res) => {
        //     if (res.data?.token) {
        //         dispatch( setAuthAC(res.data) )
        //     }
        // })

        dispatch( authAC({login, password}) )
    };

    const handleChange = (e) => {
        setLogin(e.target.value)
    };

    // const passChange = (e) => {
    //     setPassword(e.target.value)
    // }
    return (
        <div className='container'>
            <form onSubmit={submit} className={css.formWrapper}>
                <input 
                required 
                type="text" 
                placeholder="Login" 
                value={login}
                onChange={handleChange}
                />
                <input 
                required 
                type={passwordType ? "text" : "password"}
                placeholder='Password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <div onClick={() => setPasswordType(!passwordType)} >Show</div>
                <button>Enter</button>
            </form>
        </div>
    )
}
