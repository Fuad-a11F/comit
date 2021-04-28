import React from 'react'
import SettingTheme from '../Modal/SettingTheme'

export default function SettingsTheme({state,imagePath, setStylesBack11, stylesBack11, setState, saveChangesTheme, styles, setStyles}) {
    return (
        <div className={state ?  'setting__theme active': 'setting__theme'}>
            <SettingTheme setStylesBack11={setStylesBack11} stylesBack11={stylesBack11} saveChangesTheme={saveChangesTheme} styles={styles} setStyles={setStyles} setState={setState}/>
            <div style={stylesBack11} >
                <div style={styles}  className="example__postcard"><img style={styles} src={imagePath} width='100%' height='100%' alt=""/></div>
            </div>
        </div>

    )
}