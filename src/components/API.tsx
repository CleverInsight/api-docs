import React, {useState} from "react";

const API = (props: any) => {
    const [hide, setHide] = useState(true)

    return <>
        <div className={`card ${props.data.method.toLowerCase()}`} onClick={(e) => setHide(hide ? false : true)}>
            <div className="card-header" data-toggle="collapse"  aria-expanded="true">
            
                <div className="title">
                    
                    <span className="method">{ props.data.method }</span>
                    <span className="url">{ props.data.path }</span>
                    <span className="api-name"><i> { props.data.name }</i></span>
                </div>
                
                <span className="accicon" onClick={(e) => setHide(hide ? false : true)}>
                <i className={ hide ? "bi bi-caret-up-fill rotate-icon" : "bi bi-caret-down-fill rotate-icon"}></i>
                </span>
            </div>
            <div className={hide ? 'collapse hide': 'collapse show'} data-parent="#userAccordion">
                <div className="card-body">
                <div className="descr">
                    <p><b>Name:</b> { props.data.name }</p>
                    <span>Description:</span> {props.data.description}.
                </div>
                <div className="bdy-cnt">
                    <div className="row">
                    <div className="col-sm-3 aheader">
                        <h3>Auth Headers:</h3>
                        <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">
                                <div>Key</div>
                            </th>
                            <th scope="col">
                                <div>Value</div>
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>
                                <input type="text" className="form-control" />
                            </td>
                            <td>
                                <input type="text" className="form-control" />
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <input type="text" className="form-control" />
                            </td>
                            <td>
                                <input type="text" className="form-control" />
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <div className="col-sm-3 payload">
                        <h3>Request payload:</h3>
                        <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">
                                <div>Key</div>
                            </th>
                            <th scope="col">
                                <div>Value</div>
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            { Object.keys(props.data.payload).map((key, index) => {
                                return  <tr key={index}>
                                        <td>
                                            <input type="text" defaultValue={ key } className="form-control" />
                                        </td>
                                        <td>
                                            <input type="text" defaultValue={props.data.payload[key]} className="form-control" />
                                        </td>
                                </tr>
                            })}
                           
                            </tbody>
                        </table>
                    </div>
                    <div className="col-sm-4 response">
                        <h3>Response</h3>
                        <textarea className="form-control" id="response-payload" defaultValue={ JSON.stringify(props.data.response) }></textarea>
                    </div>
                    <div className="col-sm-2 trybtn">
                        <button type="button" className="btn btn-success">Try Now</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
    </>
}

export default API;