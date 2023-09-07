import { Button, Typography } from "@mui/material";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { userState } from "../../store/atoms/user";
import { isUserLoading } from "../../store/selectors/isUserLoading"
import { userEmailState } from "../../store/selectors/userEmail"



export function Appbar(){
    const router = useRouter()
    const userEmail = useRecoilValue(userEmailState);
    const userLoading = useRecoilValue(isUserLoading);
    const setUser = useSetRecoilState(userState);

        // if(userLoading){
        //     return<div></div>
        // }
    
        if(userEmail){
            return <div style={{display:"flex", justifyContent:"space-between", padding:4, zIndex:1}}> 
        <div style={{marginLeft: 10, cursor: "pointer"}}>
            <Typography variant="h6">Coursera</Typography>
        </div>
        <div style={{display: "flex"}}>
            <div style={{marginRight: 10, display: "flex"}}>
                <div style={{marginRight: 10}}>
                    <Button variant="outlined">
                        Add Course
                    </Button>
                </div>
                <div style={{marginRight: 10}}>
                    <Button variant="outlined">
                        Courses
                    </Button>
                </div>
                <div style={{marginRight: 10}}>
                    <Button 
                    variant="outlined"
                    onClick={()=>{
                        localStorage.removeItem("token")
                        setUser({
                            isLoading:false,
                            userEmail: null
                        })
                        router.push("/")
                    }}
                    >
                        Signout
                    </Button>
                </div>
            </div>
        </div>
    </div>}
        return <div style={{display:"flex", justifyContent:"space-between", padding:4, zIndex:1}}> 
        <div style={{marginLeft: 10, cursor: "pointer"}} onClick={()=>{
            router.push("/")
        }}>
            <Typography variant="h6">Coursera</Typography>
            
        </div>
        <div style={{display: "flex"}}>
            <div style={{marginRight: 10, display: "flex"}}>
                <div style={{marginRight: 10}}>
                <Link href="/signup" passHref>
                    <div style={{ display: 'inline-block' }}>
                        <Button variant="contained">SignUp</Button>
                    </div>
                </Link>
                </div>
                <div style={{marginRight: 10}}>
                <Link href="/signin" passHref>
                    <div style={{ display: 'inline-block' }}>
                        <Button variant="contained">SignIn</Button>
                    </div>
                </Link>
                </div>
            </div>
        </div>
    </div>
}
