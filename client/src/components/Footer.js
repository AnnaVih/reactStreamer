import React from 'react'

const Footer = () => {
    
    const buttonClickHandler = url => {
        window.open(url, '_blank')
    }

    return (
        <div className="ui secondary block header pointing center aligned">
            <button 
                onClick={() => buttonClickHandler("https://github.com/AnnaVih/reactStreamer")}
                className="fluid ui button"
            >Check source code on GitHub</button>
            <p>Developed in React by Anna Vihrogonova. It is a result of hard work, passion and learning from failure</p>
        </div>
    )
}

export default Footer