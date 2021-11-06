import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import Main from './components/Main';
import theme from './theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Main />
        </ThemeProvider>
    );
}

export default App;
