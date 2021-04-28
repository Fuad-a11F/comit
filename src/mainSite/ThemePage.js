import React from 'react'
import settings from '../Pictures/settings.png'
import Modal from '../Modal/Modal'
import SettingTheme from '../Modal/SettingTheme'
import SettingsTheme from '../mainSite/SettingsTheme'
export default function ThemePage({ setImagePath, setStylesBack11, stylesBack11, imagePath, setThemeData, themeData, saveChangesTheme, styles, setStyles }) {

    let [state, setState] = React.useState(false)
    
    function changePhoto(e, item) {
        setImagePath(e.target.previousSibling.src)
        setThemeData(themeData.map(obj => {
            if (obj.id === item. id) {
                obj.choose = true
            }
            else {
                obj.choose = false
            }
            return obj
        }))
    }


    return (
        <div>
            <div className="setting"><img src={settings} width='35' height='35' alt="" onClick={() => setState(true)}/></div>
            <div className='theme__page'>
                {themeData.map(item => {
                    return <div key={item.id} className="theme__img"><img src={item.img} alt=""/><input className='checkbox' type="checkbox" checked={item.choose} onChange={(e) => changePhoto(e, item)} /></div>
                })}
            </div>
            <SettingsTheme styles={styles} setStylesBack11={setStylesBack11} stylesBack11={stylesBack11} stylesBack11={stylesBack11} imagePath={imagePath} setStyles={setStyles} saveChangesTheme={saveChangesTheme} state={state} setState={setState}/>
            
        </div>

    )
}