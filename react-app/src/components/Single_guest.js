import React, { Component } from 'react'
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


export const Single_guest =({num,fill}) => {
    switch(num) {
        case '1':
            return (
                <div>
                    <Blob1 fill={fill} class='blob'></Blob1>
                </div>
            )
        case '2':
            return (
                <div>
                    <Blob2></Blob2>
                </div>
            )
        case '3':
            return (
                <div>
                    <Blob3></Blob3>
                </div>
            )
    }
    
}