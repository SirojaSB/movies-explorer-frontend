import AuthTemplate from "../AuthTemplate/AuthTemplate";
import AuthInput from "../AuthInput/AuthInput";

function Register() {
    return (
        <AuthTemplate
            title='Добро пожаловать!'
            btn='Зарегистрироваться'
            text='Уже зарегистрированы?'
            link='/signin'
            linktext='Войти'>
                <AuthInput title='Имя' type='text'/>
                <AuthInput title='E-mail' type='email'/>
                <AuthInput title='Пароль' type='password'/>
        </AuthTemplate>
    )
}

export default Register
