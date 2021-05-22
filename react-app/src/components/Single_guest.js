import React, { Component } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/CardContent';

import {ReactComponent as Blob1} from '../blobs/blob-haikei (1).svg';
import {ReactComponent as Blob2} from '../blobs/blob-haikei (2).svg';
import {ReactComponent as Blob3} from '../blobs/blob-haikei (3).svg';
import {ReactComponent as Blob4} from '../blobs/blob-haikei (4).svg';
import {ReactComponent as Blob5} from '../blobs/blob-haikei (5).svg';
import {ReactComponent as Blob6} from '../blobs/blob-haikei (6).svg';
import {ReactComponent as Blob7} from '../blobs/blob-haikei (7).svg';
import {ReactComponent as Blob8} from '../blobs/blob-haikei (8).svg';
import {ReactComponent as Blob9} from '../blobs/blob-haikei (9).svg';
import {ReactComponent as Blob10} from '../blobs/blob-haikei (10).svg';
import {ReactComponent as Blob11} from '../blobs/blob-haikei (11).svg';
import {ReactComponent as Blob12} from '../blobs/blob-haikei (12).svg';
import {ReactComponent as Blob13} from '../blobs/blob-haikei (13).svg';
import {ReactComponent as Blob14} from '../blobs/blob-haikei (14).svg';
import {ReactComponent as Blob15} from '../blobs/blob-haikei (15).svg';
import {ReactComponent as Blob16} from '../blobs/blob-haikei (16).svg';
import {ReactComponent as Blob17} from '../blobs/blob-haikei (17).svg';
import {ReactComponent as Blob18} from '../blobs/blob-haikei (18).svg';
import {ReactComponent as Blob19} from '../blobs/blob-haikei (19).svg';
import {ReactComponent as Blob20} from '../blobs/blob-haikei (20).svg';


export const Single_guest =({num,fill,showStamp}) => {
    const classes=useStyles();
    if(showStamp){
        return(
            <div align='center' style={{paddingTop:'10%'}}>
                {makeblob(num,fill)}
                <Typography align='center' className={classes.root}>
                                Stamp <i class="fas fa-plus"></i> <i class="fas fa-minus"></i>
                </Typography>
            </div>
        )
    }
    else{
        return(
            <div align='center'>
                {makeblob(num,fill)}
            </div>
        )
    }
}


const makeblob=(num,fill)=>{
    
    switch(num) {
        case '1':
            return (
                <Blob1 fill={fill} width='60%' height='60%'></Blob1>
            )
        case '2':
            return (
                <Blob2 fill={fill} width='60%' height='60%'></Blob2>
            )
        case '3':
            return (
                <Blob3 fill={fill} width='60%' height='60%'></Blob3>
            )
    }
}

const useStyles = makeStyles((theme)=>({
    root: {
        textTransform: 'none',
        width: 120,
        height: 30,
        fontWeight: 300,
        fontFamily: 'Poppins',
        
        color: '#A6A6A6',
        fontSize: '14px',
    },
    Blob: {
        paddingTop:20,
        width:120,
        height:120
    }
}))