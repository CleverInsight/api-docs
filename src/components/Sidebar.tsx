import React from "react";


const Sidebar = () => {
    return (
        <aside id="sidebar-wrapper">
            <div className="sidebar-brand">
            <h2>Docs</h2>
            </div>
            <ul className="sidebar-nav">
            <li>
                <a href="#user" className="active"><i className="bi bi-person-fill"></i>User</a>
            </li>
            <li>
                <a href="#channel"><i className="bi bi-person-fill"></i>Channels</a>
            </li>
            <li>
                <a href="#audit"><i className="bi bi-person-fill"></i>Audit</a>
            </li>
            </ul>
        </aside>
    )
}

export default Sidebar;