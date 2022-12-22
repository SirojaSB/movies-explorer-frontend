import AuthTemplate from "../AuthTemplate/AuthTemplate";
import AuthInput from "../AuthInput/AuthInput";

function Login() {
    return (
        <AuthTemplate
            title='Рады видеть!'
            btn='Войти'
            text='Ещё не зарегистрированы?'
            link='/signup'
            linktext='Регистрация'>
            <AuthInput title='E-mail' type='email'/>
            <AuthInput title='Пароль' type='password'/>
        </AuthTemplate>
    )
}

export default Login
