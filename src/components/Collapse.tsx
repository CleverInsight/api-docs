import React from "react";
import API from "./API";



const Collapse = (props:any) => {
    return <>
        <section id="content-wrapper">
        <div className="row">
            
            <div className="col-lg-12">
            { Object.keys(props.data).map((section, i) => {
                return <section id={section.toLowerCase()}>
                        <h3>{ section.toUpperCase() }</h3>
                        <div className="accordion" id="userAccordion">
                            { props.data[section].map((api:any, index:any) => {
                                return <API key={index} data={api} />
                            })}
                        </div>
                    </section>
            })}
            
            </div>
            </div>
        </section>
    </>
}

export default Collapse;