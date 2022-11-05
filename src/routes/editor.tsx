import React, {useState} from "react";
import Collapse from "../components/Collapse";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import CodeEditorLayout from "../components/CodeEditorLayout";

const Editor = () => {
    const [data, setData] = useState({
        "user": [
            {
                "method": "GET",
                "name": "home",
                "path": "/",
                "description": "Return the home landing page for the Identity Provider Services",
                "payload": {},
                "repsonse": "html"
            },
            {
                "method": "POST",
                "name": "create_user",
                "path": "/v1/account/create",
                "description": "Create a User account, and associate it with organization, roles and access controls",
                "middleware": ["authenticated", "permission_granted", "is_admin"],
                "payload": {
                    "email": "unique",
                    "password": "hash/salt of original password",
                    "auth_key": "GUID of the current user email",
                    "auth_secret": "64 char length random string"
                },
                "response": {
                    "id":1,
                    "email":"bastinrobins@gmail.com",
                    "password":"zdsadsada",
                    "auth_key":"asdasdas090909dsa",
                    "auth_secret":"asadsadadasdasda",
                    "token":"",
                    "createdAt":"2022-10-18T06:23:33.879Z",
                    "updatedAt":"2022-10-18T06:23:33.879Z"
                }
            },
            {
                "method": "POST",
                "name": "login_user",
                "path": "/v1/account/login",
                "description": "Login into the identity service using the given email and password, if not valid return error message",
                "payload": {
                    "email": "unique",
                    "password": "hash/salt of original password"
                },
                "response": {"id":1,
                    "email":"bastinrobins@gmail.com",
                    "profile": {
                        "fname": "Bastin",
                        "lname": "Robin",
                        "mobile": "8989898989898",
                        "created_at": "",
                        "updated_at": ""
                    },
                    "auth_key":"asdasdas090909dsa",
                    "auth_secret":"asadsadadasdasda",
                    "token":"Bearer sadasd009-090--09-90-90-9-010-9-"
                }
        
            },
            {
                "method": "GET",
                "name": "List all roles",
                "path": "/v1/roles/",
                "description": "Returns the list of all roles record available",
                "middleware": ["authenticated", "permission_granted"],
                "payload": {},
                "response": [
                    {
                        "id": 1,
                        "name": "",
                        "created_at": "",
                        "updated_at": ""
                    },
                    {
                        "id": 2,
                        "name": "",
                        "created_at": "",
                        "updated_at": ""
                    }
                ]
            },
            {
                "method": "GET",
                "name": "Get a single role record",
                "path": "/v1/roles/:roleId",
                "description": "Returns role with the given `:roleId`",
                "middleware": ["authenticated", "permission_granted"],
                "payload": {},
                "response": {
                        "id": 1,
                        "name": "",
                        "created_at": "",
                        "updated_at": ""
                }   
            }
        ],
        "role": [{
            "method": "POST",
            "name": "Create a new role",
            "path": "/v1/roles/",
            "description": "Returns the role created with its `id`, `created`, `updated`",
            "middleware": ["authenticated", "permission_granted"],
            "payload": {
                "name": "admin"
            },
            "response": {
                    "id": 1,
                    "name": "",
                    "created_at": "",
                    "updated_at": ""
            }   
        },
        {
            "method": "PUT",
            "name": "Update the give role using `:roleid`",
            "path": "/v1/roles/:roleId",
            "description": "Returns the role updated with its `id`, `created`, `updated`",
            "middleware": ["authenticated", "permission_granted"],
            "payload": {
        
                "name": "super_admin",
            },
            "response": {
                    "id": 1,
                    "name": "super_admin",
                    "created_at": "",
                    "updated_at": ""
            }   
        },
        {
            "method": "DELETE",
            "name": "Delete the give role using `:roleid`",
            "path": "/v1/roles/:roleId",
            "description": "Returns the role updated with its `id`, `created`, `updated`",
            "middleware": ["authenticated", "permission_granted"],
            "payload": {},
            "response": {
                    "message": "deleted successfully | already linked to records in access table"
            }   
        }]
    })
    const [mode, setMode] = useState("visual");

    const updateData = (data:any) => {
        setData(JSON.parse(data));
    }

    return (
        <>
            <div id="wrapper">
                <Sidebar items={ Object.keys(data) }/>
                <Header />
                <div className="row">
                    <div className="col-lg-12">
                        <div className="btn-group float-right" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-secondary" onClick={(e) => setMode('visual')}>Visual</button>
                            <button type="button" className="btn btn-secondary" onClick={(e) => setMode('editor')}>Editor</button>
                        </div>
                    </div>
                </div>
                { mode==='visual' ? <Collapse data={data} /> : <CodeEditorLayout updateData={updateData} code={data}/> }
            </div>
        </>
    )
}

export default Editor;