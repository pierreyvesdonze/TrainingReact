import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {

    const [password, setPassword] = React.useState([]);
    const submitHandler = (e) => {
        e.preventDefault();
        let userInput = document.querySelector('#outlined-basic').value;
        let pwdSession = sessionStorage.getItem('firstPassword');
        console.log(pwdSession);
            userInput === pwdSession ? alert("Bravo ! Tu as trouvé le mot de passe ! Rdv sur l'url /door pour la suite ;)") : alert("Ah, il semblerait que le mot de passe ait changé entre temps. Vérifie ta console pour un nouveau de passe !");
    }

    return (
        <div className='box-flex-center'>
            <Box
                component="form"
                onSubmit={submitHandler}
                className="flex-center-form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                style={{
                    margin: 'auto'
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-basic"
                    className="outlined-basic"
                    label="Mot de passe"
                    variant="outlined" 
                />
            </Box>
        </div>
    );
}