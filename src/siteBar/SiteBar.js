import {NavLink} from  'react-router-dom'
import html2canvas from 'html2canvas'

export default function Sitebar({textOpen, mainPostCard, smilesOpen}) {

    function savePostCard() {
        html2canvas(mainPostCard.current).then(canvas => {
            
            document.body.appendChild(canvas)
            let path = canvas.toDataURL()
            let link = document.createElement('a')
            link.href = path
            link.download = true
            link.click()
        });
    }
    
    return (
        <div className='site__bar'>
            <NavLink className='item__link' to='/edit'>Главная</NavLink>
            <NavLink className='item__link' to='/edit/theme'>Фон</NavLink>
            <NavLink className='item__link' to='/edit' onClick={() => smilesOpen()}>Стикер</NavLink>
            <NavLink className='item__link' to='/edit' onClick={() => textOpen()}>Текст</NavLink>
            <NavLink className='item__link' to='mainpage'>Сведения</NavLink>
            <button className='item__link' onClick={() => savePostCard()} >Скачать открытку</button>
        </div>
    )
}