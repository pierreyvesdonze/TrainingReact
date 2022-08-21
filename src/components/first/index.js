import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Step2() {
    return (
        <div>
            <div className="flex-center-middle">
                <p>Salut c'est encore moi ! J'ai encore besoin de tes services... Je souhaites que les trois Items ci-dessous apparaissent centrés sur la page, horizontalement et verticalement. J'ai entendu parler de Flexbox qui permettait ça, mais ce n'est pas moi l'expert. Peux-tu m'aider ?</p>
                <p>Aussi, j'aimerais qu'au survol de la souris, le background des items change de couleur ! Stp ! Merci c'est cool !</p>
            </div>
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
                className="container-first-items"
            >
              
                <Item className="first-item">Item 1</Item>
                <Item className="first-item">Item 2</Item>
                <Item className="first-item">Item 3</Item>
            </Stack>
        </div>
    );
}
