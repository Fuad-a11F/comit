export default function SettingTheme({ setState, setStyles, styles,setStylesBack11, stylesBack11, saveChangesTheme }) {

    function heights(e) {
        setStyles({...styles, height: e.target.value + 'px'})
        setStylesBack11({...stylesBack11, height: e.target.value + 'px'})
    }

    function widths(e) {
        setStyles({...styles, width: e.target.value + 'px'})
        setStylesBack11({...stylesBack11, width: e.target.value + 'px'})
    }

    function radius(e) {
        setStyles({...styles, borderRadius: e.target.value + 'px'})
    }

    function saveChanged() {
        saveChangesTheme(styles.height,  styles.width, styles.borderRadius, stylesBack11.background)
        setState(false)
    }

    function colors(e) {
        setStylesBack11({...stylesBack11, background: e.target.value})
    }

    return (
        <div className='set__theme'>
            <h2 style={{textAlign: 'center'}}>Настройки темы.</h2>
            <p style={{textAlign:  'left'}}>Высота открытки (по умолчанию 630)</p>
            <input className='form__postcard' value={styles.height.toString().slice(0, styles.height.toString().length - 2)} type="text" onChange={(e) => heights(e)} placeholder='Высота'/>
            <p style={{textAlign:  'left'}}>Ширина открытки (по умолчанию 520)</p>
            <input className='form__postcard' value={styles.width.toString().slice(0, styles.width.toString().length - 2)} type="text" onChange={(e) => widths(e)} placeholder='Ширина'/>
            <p style={{textAlign:  'left'}}>Радиус скругления открытки (по умолчанию 20)</p>
            <input className='form__postcard' value={styles.borderRadius.toString().slice(0, styles.borderRadius.toString().length - 2)} type="text" onChange={(e) => radius(e)} placeholder='Радиус'/>
            <p style={{textAlign:  'left'}}>Цвет заднего фона открытки</p>
            <input className='form__postcard' type="color" onChange={(e) => colors(e)}/>
            <div className="buttons__create__postcard">
                <button className='cancel' onClick={() => setState(false)}>К выбору темы</button>
                <button className='create' onClick={() => saveChanged()}>Сохранить</button>
            </div>     
        </div>
    )
}