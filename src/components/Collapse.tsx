import React from "react";
import API from "./API";



const Collapse = (props:any) => {
    return <>
        <section id="content-wrapper">
        <div className="row">
            
            <div className="col-lg-12">
            <section id="user">
                <h3>User</h3>
                <div className="accordion" id="userAccordion">
                    { props.data.map((api:any, index:any) => {
                        return <API key={index} data={api} />
                    })}
                </div>
            </section>
            </div>
            </div>
        </section>
    </>
}

export default Collapse;