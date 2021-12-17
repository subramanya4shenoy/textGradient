import React from 'react'

function TextView({ className }) {


    const styleString =
            "background-color: #f3ec78;\
            background-image: linear-gradient(45deg, #f3ec78, #af4261);\
            background-size: 100%;\
            -webkit-background-clip: text;\
            -moz-background-clip: text;\
            -webkit-text-fill-color: transparent;\
            -moz-text-fill-color: transparent;"

const overrideClass = className || '';

return (
    <div className={overrideClass} 
         style={{backgroundColor: "#f3ec78", 
                 backgroundImage: "linear-gradient(45deg, #f3ec78, #af4261)",
                 backgroundSize: "100%",
                 WebkitBackgroundClip: "text",
                 WebkitTextFillColor: "transparent",
                 MozTextFillColor: "transparent"
                 }}>
        Awesome text and quotes here
    </div>
)
}

export default TextView
