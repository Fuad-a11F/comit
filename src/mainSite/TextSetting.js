import React from "react"

export default function TextSetting({setMainText, mainText, textClose}) {

    let mainTxt = React.useRef()

    function changeMainText(e) {
        setMainText(() => {
            let temp = mainText
            temp[0].text = e.target.value
            return {...temp}
        })
    }
    function setTextStyles(e, str) {
        switch (str) {
            case 'size':
                setMainText(() => {
                    let temp = mainText
                    temp[1].styles.fontSize = e.target.value + 'px'
                    return {...temp}
                })
                break;
            case 'weight':
                setMainText(() => {
                    let temp = mainText
                    temp[1].styles.fontWeight = e.target.value
                    return {...temp}
                })
                break;      
            case 'color':
                setMainText(() => {
                    let temp = mainText
                    temp[1].styles.color = e.target.value
                    return {...temp}
                })
                break;       
            case 'lineHeight':
                setMainText(() => {
                    let temp = mainText
                    temp[1].styles.lineHeight = e.target.value + 'px'
                    return {...temp}
                })
                break;     
            case 'letterSpacing':
                setMainText(() => {
                    let temp = mainText
                    temp[1].styles.letterSpacing = e.target.value + 'px'
                    return {...temp}
                })
                break;  
        }   
    }

    return (
        <div className='text__setting'>
            <div style={{display: 'flex'}}>
                <button className='back-btn' onClick={() =>  textClose()}>←</button>
                <h2>Добавление текста</h2>
            </div>
           
            <textarea className='text-form_area' placeholder='Добавить текст к вашей открытке' onChange={(e) => changeMainText(e)}></textarea>       
            <div ref={mainTxt} className="settingText">
                    <h4>Доп. настройки текста</h4>               
                <div className='settingText__body'>
                    <div style={{maxWidth: '100px'}}>
                        <p style={{fontSize: '14px'}} >Размер</p>
                        <input style={{maxWidth:'100%', position: 'relative', top: '-13px'}} value={mainText[1].styles.fontSize.toString().slice(0,2)} onChange={(e) => setTextStyles(e, 'size')} type="range" min='10' max='80'/>
                    </div>
                    <div style={{maxWidth: '100px'}}>
                        <p style={{fontSize: '14px'}} >Жирность</p>
                        <input style={{maxWidth:'100%', position: 'relative', top: '-13px'}} value={mainText[1].styles.fontWeight} onChange={(e) => setTextStyles(e, 'weight')} type="range" min='400' max='900'/>
                    </div>               
                </div>  
                <div className='settingText__body'>
                    <div style={{maxWidth: '100px'}}>
                        <p style={{fontSize: '14px'}}>Цвет</p>
                        <input style={{ position: 'relative', top: '-13px'}} onChange={(e) => setTextStyles(e, 'color')} type="color" />
                    </div>
                    <div style={{maxWidth: '100px'}}>
                        <p style={{fontSize: '14px', position: 'relative', left: '14px'}} >Межстрочный интервал</p>
                        <input value={mainText[1].styles.lineHeight.toString().slice(0,2)} style={{maxWidth:'100%', position: 'relative', top: '-13px', left: '11px'}} onChange={(e) => setTextStyles(e, 'lineHeight')} type="range" min='10' max='99'/>
                    </div>               
                </div>   
                <div className='settingText__body'>
                    <div style={{maxWidth: '100px'}}>
                        <p style={{fontSize: '14px'}}>Межбуквенный интервал</p>
                        <input style={{maxWidth:'100%', position: 'relative', top: '-13px'}} value={mainText[1].styles.letterSpacing.toString().slice(0,2)} min='10' max='99' onChange={(e) => setTextStyles(e, 'letterSpacing')} type="range" />
                    </div>
                    <div style={{maxWidth: '100px'}}>
                        <p style={{fontSize: '14px'}} >Межстрочный интервал</p>
                        <input style={{maxWidth:'100%', position: 'relative', top: '-13px'}} type="range"/>
                    </div>               
                </div>  
            </div>

        </div>
    )
}