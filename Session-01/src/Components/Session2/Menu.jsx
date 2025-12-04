import "../../../src/menu.css"
import { Header, Logo} from "../Session1"

const menus = [
    "Notes",
    "Etudiants",
    "Matieres",
    "A Propos",
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

function Menu({exclusive, isopen, setIsOpen, onSelect}){
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
    <div className="sidebar-container">
        
    <div className="menu-container">
        <div className="header-container">
            <Logo/>
        </div>
        {
            menus.map((element, index) =>{
                return(
                <MenuItem key={index} item = {element} onSelect={onSelect}/>
                )

            })
        }
    </div>
    </div>
)
}
}

export {Menu}