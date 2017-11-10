import React from "react";
import ReactDOM from 'react-dom';
import { AppContainer } from "react-hot-loader";
import App from "./components/App";
import { BrowserRouter, HashRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MainMenu from './components/view/MainMenu.jsx'
import { cyan500 } from 'material-ui/styles/colors';

const rootEl = document.getElementById("root");

const muiTheme = getMuiTheme({
    //   palette: {
    //     textColor: cyan500,
    //   },
    appBar: {
        height: 50,
    },
});

const renderComponent = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <MuiThemeProvider muiTheme={muiTheme}>
                <BrowserRouter>
                    <Component />
                </BrowserRouter>
            </MuiThemeProvider>
        </AppContainer>,
        rootEl
    );
};

renderComponent(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept("./components/App", () => {
        // ReactDOM.render(<Game />, document.getElementById("root"));
        const NewApp = require("./components/App").default;
        renderComponent(NewApp);
    });
}
