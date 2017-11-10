import React from 'react'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

class LoginDialog extends React.Component {
    // static muiName = 'FlatButton';
    constructor(o) {
        super(o);
        this.state = {
            username: "",
            password: ""
        };
    }

    handleClose = () => {
        this
            .props
            .fnClose();
    };
    handleLogin = () => {
        this
            .props
            .fnLogin(this.state.username, this.state.password);
    }
    render() {
        const actions = [ < FlatButton label = "Cancel" primary = {
                true
            }
            onClick = {
                this.handleClose
            } />, < FlatButton label = "Log In" primary = {
                true
            }
            keyboardFocused = {
                true
            }
            onClick = {
                this.handleLogin
            } />
        ];
        return (
            <div>
                <Dialog
                    title="Login"
                    actions={actions}
                    modal={true}
                    open={this.props.open}
                    autoScrollBodyContent={true}>
                    <div>
                        <TextField
                            hintText="User Name"
                            floatingLabelText="User Name"
                            value={this.state.username}
                            onChange={e => this.setState({username: e.target.value})}/>
                    </div>
                    <div>
                        <TextField
                            type="password"
                            hintText="Password"
                            floatingLabelText="Password"
                            value={this.state.password}
                            onChange={e => this.setState({password: e.target.value})}/>
                    </div>
                </Dialog>
            </div>
        );
    }
}
export default LoginDialog
