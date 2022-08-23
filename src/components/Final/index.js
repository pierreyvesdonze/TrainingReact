import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Final() {
    const [value, setValue] = React.useState(0);


    return (
        <div className='final-main-container'>
            <div>
                <p>Te voici arrivé à l'épreuve finale ! Dans cette épreuve tu devras coder de l'html (ici du jsx en l'occurence) aindi que du CSS. Le but est de remettre un peu d'ordre dans les éléments que l'on peut voir sur cette page. Le code se situe dans src/compoments/Final/index.js. Tu as carte blanche pour rendre cette page la plus belle possible. Libre à toi d'y intégrer une barre de navigation, des div avec du texte, des images... A toi de jouer ! </p>
            </div>

            <h1>Je suis un titre</h1>

            <h2>Je suis un sous-titre</h2>

            <p>Je suis un texte</p>

            <img src='https://source.unsplash.com/yMSecCHsIBc' className="final-img" />

            <div className="final-box-1">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Item>xs=8</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>xs=4</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>xs=4</Item>
                        </Grid>
                        <Grid item xs={8}>
                            <Item>xs=8</Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>

            <div className='final-box-2'>
                <Box sx={{ width: 500 }}>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    >
                        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                    </BottomNavigation>
                </Box>
            </div>
        </div>
    );
}
