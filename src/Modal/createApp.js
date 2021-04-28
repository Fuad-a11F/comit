import {NavLink} from  'react-router-dom'

export default function CreateApp({ setModalOpen }) {
    return (
        <div>
            <h2>Создание первой открытки!</h2>
            <p style={{textAlign:  'left'}}>Имя  <span style={{color: 'red',  fontSize: '18px'}}>*обязательно</span></p>
            <input className='form__postcard' type="text" placeholder='Придумайте имя проекта'/>
            <p style={{textAlign:  'left'}}>Описание</p>
            <input className='form__postcard' type="text" placeholder='Напишите короткое описание'/>
            <div className="buttons__create__postcard">
                <button className='cancel' onClick={() => setModalOpen(false)}>Отмена</button>
                <NavLink to='/edit' className='create' onClick={() => setModalOpen(false)}>Создать</NavLink>
            </div>
        </div>
    )
}