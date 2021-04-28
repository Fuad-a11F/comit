import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from  'react-router-dom'
import SiteBar from './siteBar/SiteBar'
import MainPage from './mainSite/MainPage'
import FirstPage from './mainSite/FirstPage'
import ThemePage from './mainSite/ThemePage'
import Smiles from './mainSite/smiles'
import TextSetting from './mainSite/TextSetting'
import Modal from './Modal/Modal'
import CreateApp from './Modal/createApp'
import React from 'react';
import theme from './themeImg/theme.jpg';import theme1 from './themeImg/theme_2.jpg';import theme2 from './themeImg/theme_3.jpg';import theme3 from './themeImg/theme_4.jpg';import theme4 from './themeImg/theme_5.jpg';import theme5 from './themeImg/theme_6.jpg'; import theme6 from './themeImg/theme_7.jpg';import theme7 from './themeImg/theme_8.jpg';import theme8 from './themeImg/theme_9.jpg'

function App() {
  let column1 = React.useRef()
  let column2 = React.useRef()
  let column3 = React.useRef()
  let [modalOpen, setModalOpen] = React.useState(false)
  let [imagePath, setImagePath] =  React.useState()
  let [themeData, setThemeData] = React.useState([
    {
        id: 1,
        img: theme,
        choose: false
    },
    {
        id: 2,
        img: theme1,
        choose: true
    },
    {
        id: 3,
        img: theme2,
        choose: false
    },
    {
        id: 4,
        img: theme3,
        choose: false
    },
    {
        id: 5,
        img: theme4,
        choose: false
    },
    {
        id: 6,
        img: theme5,
        choose: false
    },
    {
        id: 7,
        img: theme6,
        choose: false
    },
    {
        id: 8,
        img: theme7,
        choose: false
    },
    {
        id: 9,
        img: theme8,
        choose: false
    },
])
  let [stylesBlock, setStylesBlock] = React.useState({
    height: '630px',
    width: '520px',   
    borderRadius: '20px',
    position: 'relative'
  })
  let [stylesBlock11, setStylesBlock11] = React.useState({
    height: '630px',
    width: '520px',   
    background: 'black',
    marginTop: '8px'
  })
  let [styles, setStyles] = React.useState({
    height: '630px',
    width: '520px',
    borderRadius: '20px',
    marginRight: '50px',
    position: 'relative',
})
  let [stylesBack11, setStylesBack11] = React.useState({
    height: '630px',
    width: '520px',
    background: 'black',
    marginRight: '50px',
  })

  let [mainText, setMainText] = React.useState(
    [
      {
        text: ''
      },
      {
        styles: {
          color: 'black',
          fontSize: '35px',
          lineHeight: '30px',
          letterSpacing: '11px',
          fontWeight: '700',
          top: '0px',
          left: '30px'
        }
      },
    ]
  )
  let mainPostCard = React.useRef()
  function saveChangesTheme(h, w, r, c) {
    setStylesBlock({height: h, width: w, borderRadius: r})
    setStylesBlock11({height: h, width: w, background: c, marginTop: '8px'})
  }
  React.useEffect(() => {
      setImagePath('http://localhost:3000/static/media/theme_2.37b24543.jpg')
      console.log('1')
  }, [])
  function textOpen() {
    column1.current.style.transform = 'translateY(-100%)'
    column2.current.style.transform = 'translateY(-100%)'
    column3.current.style.transform = 'translateY(0%)'
  }
  function textClose() {
    column1.current.style.transform = 'translateY(0%)'
    column2.current.style.transform = 'translateY(0%)'
  }
  function smilesOpen() {
    column1.current.style.transform = 'translateY(-100%)'
    column3.current.style.transform = 'translateY(-200%)'
  }  
  function smilesClose() {
    column1.current.style.transform = 'translateY(0%)'
    column3.current.style.transform = 'translateY(0%)'
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} >
          <CreateApp setModalOpen={setModalOpen}/>
        </Modal>
        <div className="startApp">
          <Route exact path='/' render={() => <FirstPage setModalOpen={setModalOpen}/> } />
        </div>
        
        <div className="wrapper">
          <div  className='site-bar'>
            <div ref={column1} className="column_1">
              <Route path='/edit' render={() => <SiteBar smilesOpen={smilesOpen} mainPostCard={mainPostCard} textOpen={textOpen}/> } />
            </div>
            <div ref={column2} className="column_2">
              <Route path='/edit' render={() =>  <TextSetting textClose={textClose} setMainText={setMainText} mainText={mainText}/>} />
            </div>     
            <div ref={column3} className="column_3">
              <Route path='/edit' render={() =>  <Smiles smilesClose={smilesClose}/>} />
            </div>        
          </div>
          
          <div className="work__zone">
            <Route exact path='/edit' render={() => <MainPage stylesBlock11={stylesBlock11} mainPostCard={mainPostCard} setMainText={setMainText} mainText={mainText} stylesBlock={stylesBlock} imagePath={imagePath}/> } />
            <Route exact path='/edit/theme' render={() => <ThemePage setStylesBack11={setStylesBack11} stylesBack11={stylesBack11} stylesBack11={stylesBack11} imagePath={imagePath} styles={styles} setStyles={setStyles} saveChangesTheme={saveChangesTheme} themeData={themeData} setThemeData={setThemeData} imagePath={imagePath} setImagePath={setImagePath} /> } />
          </div>  
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
