import React from 'react';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, ThemeProvider} from '@material-ui/core/styles';


const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText('#F3F3FF'),
      backgroundColor: '#F3F3FF',
      '&:hover': {
        backgroundColor: '#E0E0FF',
      },
    },
  }))(Button);


class OpenPartyGuests extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={{ marginBottom:100} }>
                <h2
                style={{fontFamily: 'Poppins', fontSize: 16, color:'#383838', marginTop:25}}
                ><b>Guests</b></h2>
                <div class="container" style={{borderBottom: '3px solid black', marginBottom:35} }>
                    <div class="row">
                        <div class="col-md-1">
                            <h2
                                onClick={() => { alert('clicked') }}
                                style={{fontFamily: 'Poppins', fontSize: 40, color:'#A9A9FF', marginTop:25, marginBottom: 30}}
                                ><b>+</b></h2>
                        </div>
                        <div class="col-md-11">
                        </div>
                    </div>
                </div>


                <div class="container">
                    <div class="row">
                        <div class="col-md-11"></div>
                        <div class="col-md-1">
                        <ColorButton variant="contained" color="primary" onClick={() => { alert('clicked') }} >    <SendOutlinedIcon fontsize="small" style={{color:'#A9A9FF' }}/></ColorButton>
                        </div>
                    </div>
                </div>
                
            </div>

        )
    }
}

export default OpenPartyGuests