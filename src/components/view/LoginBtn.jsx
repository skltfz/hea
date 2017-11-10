// modules/NavLink.js
import React from 'react'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
const styles = {
    colorIcon: {
        color: 'blue'
    }
}
class LoginBtn extends React.Component {
    constructor(o) {
        super(o);
    }
    render() {
        return (
            <IconButton iconStyle={styles.colorIcon} {...this.props}>
                <FontIcon className="material-icons">fingerprint</FontIcon>
            </IconButton>
        );
    }
}
export default LoginBtn
