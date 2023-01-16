import './AuthInput.css'

function AuthInput({title, type, name, value = '', onChange, error, pattern}) {
    return(
        <div className='auth-input'>
            <label className='auth-input__label'>
                {title}
                <input className={`auth-input__input ${error && 'auth-input__input_error'}`}
                       type={type}
                       name={name}
                       required
                       value={value}
                       onChange={onChange}
                       pattern={pattern}/>
                <span className={`auth-input__input-error ${error && 'auth-input__input-error_active'}`}>{error || '.'}</span>
            </label>
        </div>

    )
}

export default AuthInput
