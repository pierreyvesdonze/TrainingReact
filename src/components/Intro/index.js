import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                    <p>Salut et bienvenue dans ce tuto pour t'entrainer au css ainsi qu'à Javacript.</p>
                </Box>
            </Container>
        </React.Fragment>
    );
}
