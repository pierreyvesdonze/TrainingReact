import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Item className="grid-8">
                            <p>
                                Coucou je m'appelle grid-8, je voudrais avoir une hauteur de 120px et cette couleur de fond : #496D89
                            </p>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item className="grid-4">
                            <p>
                                Bonjour, je m'appelle grid-4. Je souhterais avoir cette couleur de fond : #123652 et une hauteur de 60px.
                            </p>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item className="grid-4">
                            <p>
                                <p>
                                    Bonjour, je m'appelle grid-4. Je souhterais avoir cette couleur de fond : #123652 et une hauteur de 60px.
                                </p>
                            </p>
                        </Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item className="grid-8">
                            <p>
                                Coucou je m'appelle grid-8, je voudrais avoir une hauteur de 120px et cette couleur de fond : #496D89
                            </p>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item className="grid-6">
                            <p>
                                Salut, moi je m'appelle grid-6, je voudrais avoir une hauteur de 160px et cette couleur de fond : #042037
                            </p>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item className="grid-6">
                            <p>
                                Salut, moi je m'appelle grid-6, je voudrais avoir une hauteur de 160px et cette couleur de fond : #042037
                            </p>
                        </Item>
                    </Grid>
                </Grid>
                <div className='home-title-style'>
                    <h1>Donnes-moi du style !</h1>
                    <br />
                    <p>Ah oui et stp, pourrais-tu changer la couleur du body ? J'aime la couleur bleue mais celle-ci me rend aveugle ! </p>
                </div>
            </Box>
        </>
    );
}
