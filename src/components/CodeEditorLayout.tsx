import React, { useState, useEffect } from "react";


const CodeEditorLayout = (props: any) => {

    return <div id="content-wrapper">
        <div className="row">
            <div className="col-lg-12">
                <h3>Editor View</h3>
                <div data-color-mode="dark">
                    <textarea defaultValue={JSON.stringify(props.code, null, 4)} cols={120} rows={25} onChange={(evn) => props.updateData(evn.target.value)}></textarea>
                </div>
            </div>
        </div>
    </div>
}

export default CodeEditorLayout;