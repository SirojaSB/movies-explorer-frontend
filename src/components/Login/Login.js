import AuthTemplate from "../AuthTemplate/AuthTemplate";
import AuthInput from "../AuthInput/AuthInput";
import useFormWithValidation from "../../utils/useFormWithValidation";
import {useEffect} from "react";
import {EMAIL_PATTERN} from "../../utils/constants";

function Login({onLogin, errorMessage}) {
    const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();

    const handleSubmit = () => {
        onLogin(values)
        resetForm({ email: values.email || '', password: '' });
    }

    useEffect(() => {
        resetForm({ email: '', password: '' });
    }, [])

    return (
        <AuthTemplate
            title='Рады видеть!'
            btn='Войти'
            text='Ещё не зарегистрированы?'
            link='/signup'
            linktext='Регистрация'
            onSubmit={handleSubmit}
            isValid={isValid}
            errorMessage={errorMessage}>
                <AuthInput title='E-mail'
                           type='email'
                           name='email'
                           error={errors.email}
                           pattern={EMAIL_PATTERN}
                           value={values.email}
                           onChange={handleChange}/>
                <AuthInput title='Пароль'
                           type='password'
                           name='password'
                           error={errors.password}
                           value={values.password}
                           onChange={handleChange}/>
        </AuthTemplate>
    )
}

export default Login
