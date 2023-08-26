import { Button, Grid, Typography } from '@mui/material'
import Image from 'next/image';
import Link from 'next/link';

import codeImage from "../../images/class.jpeg"

export function Landing(){
    return <>    <Grid container style={{padding: "5vw"}}>
            <Grid item xs={12} md={6} lg={6}>
                <div style={{marginTop: 100}}>
                    <Typography variant='h2'>
                        Course admin
                    </Typography>
                    <Typography variant='h5'>
                        A place to learn and grow
                    </Typography>
                </div>
                <div style={{display: 'flex',  marginTop:20}}>
                    <div style={{marginRight: 10}}>
                    <Link href="/signin" passHref>
                            <div style={{ display: 'inline-block' }}>
                                <Button variant="contained">SignIn</Button>
                            </div>
                        </Link>
                    </div>
                
                    <div>
                        <Link href="/signup" passHref>
                            <div style={{ display: 'inline-block' }}>
                                <Button variant="contained">SignUp</Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6} style={{marginTop: 20}}>
            <Image
                src={codeImage}
                alt='Code image'
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
            />
            </Grid>
            
        </Grid>
    </>

}