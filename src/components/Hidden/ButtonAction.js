import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ButtonAction() {
    const hiddenButton = (e) => {
        if (e.target.style.backgroundColor === "transparent") {
            alert("Tu m'as trouvé par chance... je dois être entièrement visible pour être fonctionnel !");
        } else if (e.target.style.color === "transparent") {
            alert("Tu m'as trouvé par chance... je dois être entièrement visible pour être fonctionnel !");
        } else {
            alert('Bingo ! Le mot de passe se trouve dans la console de ton navigateur ;) ');
            {isMySecret()}
        }
    }

    const isMySecret = () => {
        let random = Math.random().toString(36).slice(-8);
        let password = sessionStorage.getItem('firstPassword');
        sessionStorage.setItem('firstPassword', random);
        console.log(password);
    }

    return (
        <Stack spacing={2} direction="row">
            <Button
                style={{
                    color: 'transparent',
                    backgroundColor: 'transparent',
                    border: 'none',
                    'cursor': 'unset'
                }}
                variant="outlined"
                onClick={hiddenButton}
            >Bingo
            </Button>
        </Stack>
    );
}
