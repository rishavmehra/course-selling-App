import { Button, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";



export function Signup(props: {
    onClick: (username: string, password: string) => void
}){
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

    return <div>

        <div style={{display:"flex", justifyContent: "center", paddingTop: 150, paddingBottom:10 }}>
            <Typography variant="h5" >
                Welcome To Signup page
            </Typography>
        </div>

        <div style={{display:"flex", justifyContent: "center"}}>
            <Card style={{width:300, padding: 30, justifyContent:"center"}}>
                    <TextField 
                        label="Email" 
                        variant="outlined"
                        onChange={(event)=>{
                            setUsername(event.target.value)
                        }}
                    />
                    <br /> <br />
                    <TextField 
                        onChange={(event)=>{
                            setPassword(event.target.value)
                        }}
                        label="Password" 
                        variant="outlined"
                    />
                    <br /> <br />
                    <Button 
                    variant="contained"
                    onClick={()=>{
                        props.onClick(username, password)
                    }}
                    setUser
                    >
                    Submit
                    </Button>
            </Card>
        </div>
    </div>
}