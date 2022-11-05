import React from "react";


const Sidebar = (props:any) => {
    return (
        <aside id="sidebar-wrapper">
            <div className="sidebar-brand">
            <h2>Docs</h2>
            </div>
            <ul className="sidebar-nav">
            { props.items.map((item:string, i:number) => {
                return <li>
                    <a href={`#${item}`}><i className="bi bi-person-fill"></i>{ item.toUpperCase() }</a>
                </li>
            })}
            
            </ul>
        </aside>
    )
}

export default Sidebar;