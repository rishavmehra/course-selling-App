import axios from "axios";
import { Signin } from "ui";
import {useRouter} from "next/router";


export default function SigninPage(){
        const router = useRouter();
    return <>
        <Signin onClick={async(username, password)=>{
            const response =await axios.post("/api/signin", {
                username, password
            })
            const data = response.data;
            localStorage.setItem("token", data.token)
            router.push("/")
        }} 
        />
    </>
}
