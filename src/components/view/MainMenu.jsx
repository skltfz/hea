import React from 'react'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import SvgIcon from 'material-ui/SvgIcon';
import Snackbar from 'material-ui/Snackbar';
import NavLink from './NavLInk';
import LoginBtn from './LoginBtn';
import LoggedModule from './LoggedModule';
import LoginDialog from './LoginDialog';

class MainMenu extends React.Component {
    constructor(o) {
        super(o);
        this.state = {
            open: false
        };
    }
    toggleDrawer = () => {
        this.setState({
            open: !this.state.open
        });
    }

    processLogin = () => {
        this.setState({dialogOpen: true});
    }

    processLogout = () => {
        this.setState({logged: false, profile: null});
    }
    dialogClose = () => {
        this.setState({dialogOpen: false});
    }

    dialogLogin = (name, pw) => {
        var profile = {
            name: name,
            pw: pw
        };
        this.setState({logged: true, dialogOpen: false, profile: profile});
        console.log(this.state, profile);
        this.alert("LOGIN SUCCESS");
    }
    alert = (msg) => {
        this.setState({alertMsg: msg, alert: true});
    }
    alertOnClose = () => {
        this.setState({alert: false});
    }

    render() {

        return (
            <div>
                <Snackbar
                    open={this.state.alert}
                    message={this.state.alertMsg}
                    autoHideDuration={3000}
                    onRequestClose={this.alertOnClose}/>
                <LoginDialog
                    open={this.state.dialogOpen}
                    fnLogin={this.dialogLogin}
                    fnClose={this.dialogClose}/>
                <AppBar
                    iconElementRight={this.state.logged
                    ? <LoggedModule profile={this.state.profile} fnLogout={this.processLogout}/>
                    : <LoginBtn onClick={this.processLogin}/>}
                    onLeftIconButtonTouchTap={this.toggleDrawer}
                    title="Help Each Other"/>
                <Drawer
                    onRequestChange={(open) => this.setState({open})}
                    docked={false}
                    open={this.state.open}>
                    <MenuItem
                        onClick={this.toggleDrawer}
                        linkButton
                        containerElement={(<NavLink to="/home"/>)}
                        primaryText="Home"
                        leftIcon={(
                        <FontIcon className="material-icons">grid_on</FontIcon>
                    )}/>
                    <MenuItem
                        onClick={this.toggleDrawer}
                        linkButton
                        containerElement={(<NavLink to="/game"/>)}
                        primaryText="Board"
                        leftIcon={(
                        <FontIcon className="material-icons">grid_on</FontIcon>
                    )}/>
                    <MenuItem
                        onClick={this.toggleDrawer}
                        linkButton
                        containerElement={(<NavLink to="/aboutus"/>)}
                        primaryText="About us"
                        leftIcon={(
                        <FontIcon className="material-icons">people</FontIcon>
                    )}/>
                </Drawer>
            </div >
        );
    }
}
export default MainMenu;