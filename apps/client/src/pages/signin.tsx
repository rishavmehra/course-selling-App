import axios from "axios";
import { Signin } from "ui";

export default function SigninPage(){
    return <>
        <Signin onClick={async(username, password)=>{
            const response =await axios.post("/api/signin", {
                username, password
            })
            const data = response.data;
            localStorage.setItem("token", data.token)
        }} />
    </>
}
