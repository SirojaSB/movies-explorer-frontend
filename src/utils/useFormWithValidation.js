import {useState, useCallback} from 'react'

function useFormWithValidation() {
    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    const [isValid, setIsValid] = useState(false)

    const handleChange = (e) => {
        const target = e.target
        const { name, value } = target

        setValues(values => ({ ...values, [name]: value }))
        setErrors(errors => ({ ...errors, [name]: target.validationMessage }))
        setIsValid(target.closest('form').checkValidity())
    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues)
            setErrors(newErrors)
            setIsValid(newIsValid)
        },
        [setValues, setErrors, setIsValid]
    );

    return {values, errors, isValid, handleChange, resetForm}
}

export default useFormWithValidation
