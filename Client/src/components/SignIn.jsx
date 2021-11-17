import React, { useEffect, useState } from "react";
import Axios from "axios";


function SignIn() {

    const [data, setdata] = useState([{}]);
    const [Auth,setAuth] =useState(false);
    useEffect(() => {
        Axios.get("/members").then(res => {
            setdata(res.data);
        }).catch(err => console.log(err))

    }, []);

    function handleClick() {
        setAuth(true)
    }
    return (
        <div>
            <h1>Hello</h1>
            <button onClick={handleClick} className="login">
                <img style={{ width: "50px", height: "50px", paddingTop: "10px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google Logo" />
                Log in With Google
            </button>
            {Auth ? <div>{data.members.map((data,index)=>{
                return(
                   
                    <div> 
                    {data}</div>
                )
            })}</div>:null}
        </div>
    );
}

export default SignIn;