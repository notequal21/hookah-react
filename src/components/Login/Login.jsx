import style from './Login.module.scss'
import loginBg from '../../assets/img/login-bg.jpg'
import { Link, NavLink, Redirect, Route, Router, withRouter } from "react-router-dom";
import { state } from "../../state/state";
import React, { useRef, useState } from "react";

class Login extends React.Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        // Если пользователь авторизировался - редиректит на страницу каталог
        console.log(state.isAuth)
        if (state.isAuth === 'auth') {
            return <Redirect to={'/catalog'} />
        }
    }

    render() {

        // Если пользователь авторизировался - редиректит на страницу каталог
        if (state.isAuth === 'auth') {
            return <Redirect to={'/catalog'} />
        }

        let login = React.createRef()

        let password = React.createRef()

        let submit = (e) => {
            // e.preventDefault();
            if (login.current.value === 'root' && password.current.value === 'root1') {
                localStorage.setItem('isAuth', 'auth')
                state.updateAuthStatus()
                // return <Redirect to={'/catalog'} />
            }
        }

        return (
            <div className={`${style.main}`}>
                <div className={`${style.main__bg}`}><img src={loginBg} alt="" /></div>
                <div className={`${style.login}`}>
                    <div className={`${style.loginInfo}`}>
                        <span>Login: root</span>
                        <span>Password: root1</span>
                    </div>
                    <div className={`${style.login__title}`}>
                        вход
                    </div>
                    <form onSubmit={submit} className={`${style.loginBody}`}>
                        <div className={`${style.loginBody__input}`}>
                            <input ref={login} placeholder={`Login`} type="text" />
                        </div>
                        <div className={`${style.loginBody__input}`}>
                            <input ref={password} placeholder={`Password`} type="password" />
                        </div>
                        <button className={`${style.loginBody__btn}`}>Войти</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login