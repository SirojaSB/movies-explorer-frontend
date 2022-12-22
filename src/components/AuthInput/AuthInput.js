import './AuthInput.css'

function AuthInput({title, type}) {
    return(
        <label className='auth-input'>
            {title}
            <input className='auth-input__input' type={type}/>
        </label>
    )
}

export default AuthInput
