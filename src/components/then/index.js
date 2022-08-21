import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function BoxSx() {
    
    // Le code à changer se situe dans cette fonction
    const myClick = (e) => {
        alert("J'ai un souci. Lorsque je clique sur le bouton click me, son container parent devient rouge. Je souhaiterais une couleur plus jolie que ce rouge. Peux-tu m'aider stp ? (Tu peux jeter un oeil dans le code javascript de ce composant pour avoir un indice...)");
        
        let div = document.querySelector('.box-flex-center');

        div.classList.toggle('active-flex-click');
    }
    
    return (
        <Box
            className="box-flex-center"
            sx={{
                width: 300,
                height: 300,
                backgroundColor: 'primary.dark',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                },
            }}
        >
            <Typography>
                <button className="box-flex-center-btn" onClick={ myClick }>Click me !</button>
            </Typography>
        </Box>
    );
}
