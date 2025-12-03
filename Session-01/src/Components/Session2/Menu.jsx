import "../../../src/menu.css"
import { Header } from "../Session1"

const menus = [
    "Notes",
    "Etudiants",
    "Matieres",
    "Apropos",
    "Accueil"
 ] 


function ShowAlert(element){
    return alert("On souhaite accéder à : " + element)
}


function MenuItem({item, onSelect}){
    return (
<div className="menu-item">
    <button onClick={() => onSelect(item)}>{item}</button>
</div>
)
}

function Menu({exclusive, onSelect}){
if(exclusive){    
return (
    <div>
        <Header/>
        <div className="menu-container">
        {
            menus.map((element, index) =>{
                return(
                <MenuItem key={index} item = {element} onSelect={onSelect}/>
                )

            })
        }
        </div>
    </div>
)}
else{
    return (
    <div className="menu-container">
        <Header/>
        {
            menus.map((element, index) =>{
                return(
                <MenuItem key={index} item = {element} onSelect={onSelect}/>
                )

            })
        }
    </div>
)
}
}

export {Menu}