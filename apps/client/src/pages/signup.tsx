import axios from "axios";
import { Signup } from "ui";



export default function SignupPage(){
    return <>
        <Signup onClick={async(username, password)=>{
            const response = await axios.post("/api/signup", {
                username, password
            });
            localStorage.setItem("token", response.data.token)
        }} />
    </>
}