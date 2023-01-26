import AuthTemplate from "../AuthTemplate/AuthTemplate";
import AuthInput from "../AuthInput/AuthInput";
import useFormWithValidation from "../../utils/useFormWithValidation";
import {useEffect} from "react";
import {EMAIL_PATTERN} from "../../utils/constants";

function Register({onRegister, errorMessage}) {
    const {
        values,
        errors,
        isValid,
        handleChange,
        resetForm
    } = useFormWithValidation();

    const handleSubmit = () => {
        onRegister(values)
        resetForm({ name: values.name || '', email: values.email || '', password: '' });
    }

    useEffect(() => {
        resetForm({ name: '', email: '', password: '' });
    }, [])


    return (
        <AuthTemplate
            title='Добро пожаловать!'
            btn='Зарегистрироваться'
            text='Уже зарегистрированы?'
            link='/signin'
            linktext='Войти'
            onSubmit={handleSubmit}
            isValid={isValid}
            errorMessage={errorMessage}>
                <AuthInput title='Имя'
                           type='text'
                           name='name'
                           error={errors.name}
                           value={values.name}
                           onChange={handleChange}/>
                <AuthInput title='E-mail'
                           type='email'
                           name='email'
                           pattern={EMAIL_PATTERN}
                           error={errors.email}
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

export default Register
