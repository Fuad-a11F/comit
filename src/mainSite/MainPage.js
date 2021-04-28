import React from "react"


export default function MainPage({ imagePath, mainPostCard,stylesBlock11, stylesBlock, stylesImg, mainText, setMainText }) {
    let classes = {...mainText[1].styles}
    let offY, offX;
    let refLink = React.useRef()

    React.useEffect(() => {
        refLink.current.addEventListener('dragstart', (e) => {
            offY = e.offsetY
            offX = e.offsetX
        })
    })
    
    function offset() {
        let rect = document.querySelector('.postcard').getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    function endDragging(e) {
        

        setMainText(() => {
            let temp = mainText
            temp[1].styles.top = ((e.pageY - offY - 30) - offset().top) + 'px'
            temp[1].styles.left = ((e.pageX - offX) - offset().left) + 'px'
            return {...temp}
        })
        console.log(offset().top)
        console.log(offset().left)
    }
        
    return (
        <div ref={mainPostCard}  style={stylesBlock11} >
            <div style={stylesBlock} className='postcard'>
                <img  src={imagePath}  alt=""/>
                <p style={classes} ref={refLink} draggable={true}  onDragEnd={(e) => endDragging(e)} className='postcard_text'>{mainText[0].text}</p>
            </div>

        </div>
    )
}