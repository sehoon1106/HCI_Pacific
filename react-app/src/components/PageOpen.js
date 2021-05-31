import React, {useState, useEffect, Component} from 'react';
import OpenPartyGuests from './OpenPartyGuests';
import OpenPartyInfo from './OpenPartyInfo';
import OpenPartyNotices from './OpenPartyNotices'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, withStyles, ThemeProvider} from '@material-ui/core/styles';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import firebase from './Firebase'
import Header from './Header'
import {Typography} from '@material-ui/core';

const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText('#F3F3FF'),
      backgroundColor: '#F3F3FF',
      '&:hover': {
        backgroundColor: '#E0E0FF',
      },
    },
    typography :{
        fontFamily:"Poppins",
        fontSize: 16,
        fontWeight:300,
        color: "#222222"
    },
    palette :{
        primary: {
            main: "#A9A9FF"
        }
    }
  }))(Button);


  const theme = createMuiTheme({
    typography :{
        fontFamily:"Poppins",
        fontSize: 16,
        fontWeight:300,
        color: "#222222"
    },
    palette :{
        primary: {
            main: "#8484ED"
        },
        secondary:{
            main: "#ABABAB"
        }
    }
    
})

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily:"Poppins",
        fontSize: 12,
        fontWeight:500,
        color: "#8484ED"
    },
    rootTwo: {
        fontFamily:"Poppins",
        fontSize: 12,
        fontWeight:500,
        color: "#ABABAB"
    }
  }));


const PageOpen = () => {
    const [info,setInfo] = useState({});
    const classes = useStyles();
    //should be form of {name: 'HBD Sehoon',location:'busan',memo:'blah',dateTime:'2021-11-06T19:00', notices:{0:"don't sleep"}}
    const userRef=firebase.database()
    var location_default

    //const location_default
    React.useEffect(()=>{
    userRef.ref('/Mypage/location').on('value',(snapshot) => {

        location_default = snapshot.val();
        //console.log(location_snapshot)
        // for(let location in location_snapshot) {
        //     console.log(location_snapshot, 'location')
        // location_default=location
        // }
    })
    },[])

    const sendInvitation = () => {
        var temp = info
        console.log('send button')
        console.log(temp.name)



        if (temp.location==""){
            console.log(location_default)
            info.location=location_default
            console.log(info)
        }
        if (temp.name==("" ||undefined)){
            alert('You need to add your party name')
        }
        else{
            userRef.ref('/Parties/'+info.name).set(info)
        }
        
       
        // console.log(info)
    }
    return(
        <ThemeProvider theme={theme}>
        <div style={{marginBottom:100}}>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-2 col-md-8">
                        <OpenPartyInfo info={info} setInfo={setInfo} />
                        <OpenPartyNotices info={info} setInfo={setInfo} />
                        <OpenPartyGuests info={info} setInfo={setInfo}/>
                    </div>
                </div>
            </div>


            <Box display="flex" justifyContent="center">
                <Box>
                    <Button style={{marginRight: 20}} variant="outlined" color="secondary" onClick={sendInvitation} >
                        {/* <SendOutlinedIcon style={{color:'#A9A9FF'}}/> */}
                        <Typography className={classes.rootTwo} >open only</Typography>
                    </Button>
                </Box>
                <Box>
                    <Button  variant="outlined" color="primary" onClick={sendInvitation} >
                        {/* <SendOutlinedIcon style={{color:'#A9A9FF'}}/> */}
                        <Typography className={classes.root} >open and send</Typography>
                    </Button>
                </Box>
            </Box>
        </div>
        </ThemeProvider>
    )
}

export default PageOpen;