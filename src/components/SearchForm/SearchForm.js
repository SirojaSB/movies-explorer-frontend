import './SearchForm.css'
import icon from '../../images/Search-icon.svg'

function SearchForm({onSubmit, handleCheckbox, isShortMovie, onChange, searchValue}) {

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit()
    }

    return (
        <form className='search-form' onSubmit={handleSubmit}>
            <label className='search-form__input-label'>
                <input className='search-form__input'
                       name='search-films'
                       type="text"
                       value={searchValue}
                       onChange={onChange}
                       placeholder='Фильм'
                       required/>
                <button className='search-form__btn' type='submit'>
                    <img className='search-form__icon' src={icon} alt='Иконка поиска'/>
                </button>
            </label>
            <label className='search-form__checkbox-label'>
                Короткометражки
                <input className='search-form__checkbox' name='short-films' type='checkbox' onChange={handleCheckbox}/>
                <span className={`search-form__checkbox-visible ${isShortMovie && 'search-form__checkbox-visible_active'}`} />
            </label>
        </form>
    )
}

export default SearchForm
