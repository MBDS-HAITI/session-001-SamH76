import "../../../src/menu.css"

const menus = [
    "Notes",
    "Etudiants",
    "Matières",
    "A propos" ] 


function ShowAlert(element){
    return alert("On souhaite accéder à : " + element)
}

function MenuItem({item, onClick}){
    return (
<div className="menu-item">
    <button onClick={onClick}>{item}</button>
</div>
)

}

function Menu(){
return (
    <div className="menu-container">
        {
            menus.map((element, index) =>{
                return(
                <MenuItem key={index} item = {element} onClick={()=>{ShowAlert(element)}}/>
                )

            })
        }
    </div>
)
}
export {Menu}