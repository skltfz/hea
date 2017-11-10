// modules/NavLink.js
import React from 'react'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'
import NavLink from './NavLInk';

const styles = {
    colorIcon: {
        color: 'blue',
    }
}
class LoggedModule extends React.Component {
    // static muiName = 'FlatButton';
    constructor(o) {
        super(o);
    }
    render() {
        return (
           <IconMenu
            iconButtonElement={
                <IconButton iconStyle={styles.colorIcon} {...this.props}>
                    <FontIcon className="material-icons">more_vert</FontIcon>
                </IconButton>
            }
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
           >                
           
            <MenuItem primaryText="My profile"
                containerElement={<NavLink to="/myprofile" />}              
                leftIcon={
                        <FontIcon className="material-icons">perm_identity</FontIcon>
                }
            />
            <Divider />
            <MenuItem value="logout" onClick={this.props.fnLogout} primaryText="Logout" 
            leftIcon={
                        <FontIcon className="material-icons">exit_to_app</FontIcon>
                }
                />        
          </IconMenu>                                   
        );
    }
}
              {/* menuItems={[
                <MenuItem primaryText="UPPERCASE" />,
                <MenuItem primaryText="lowercase" />,
                <MenuItem primaryText="CamelCase" />,
                <MenuItem primaryText="Propercase" />,
              ]} */}
export default LoggedModule
