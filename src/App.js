import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"
import "./style.css"


export default function App() {
    const [darkMode, setDarkMode] = React.useState(true)
    
    function toggleDarkMode() {
        setDarkMode(function(prevState){
            return !prevState
        })
    }
    return (
        <div className = {darkMode ? "darkApp" : ""}>
            <Header darkMode = {darkMode} toggleDarkMode = {toggleDarkMode}/>
            <Meme darkMode = {darkMode}/>
        </div>
    )
}
