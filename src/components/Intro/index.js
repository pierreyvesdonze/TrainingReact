import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', textAlign: 'center', overflowY: "scroll", paddingBottom: "4em" }}>
                    <h1>Salut et bienvenue dans ce tuto pour t'entrainer à manipuler du CSS et du Javacript.</h1>
                    <p>Si tu vois cette page c'est que tu as reçu les instructions pour installer NodeJs, React ainsi que Git. Tu auras besoin de Git pour partager ton travail sur ta branche pour que l'on puisse voir ton travail.</p>
                    <br />
                    <p>Pour se faire et avant toute chose tu auras besoin de te brancher sur la bonne branche. Voici la commande à effectuer dans ton terminal, à la racine de ton projet (par ex. /var/www/html/training-react) : </p>
                    <h3>git checkout -b alex</h3>
                    <br />
                    <p>Si tout s'est bien déroulé, un message de confirmation s'affiche dans ton terminal. Te voilà prêt à coder sur la bonne branche ! Une fois que tu voudras "pousser" ton travail sur le dépot GitHub <b>pour la première fois </b>il te faudra rentrer ces commandes dans ton terminal : </p>
                    <h3>git add .</h3>
                    <h3>git commit -m "le message que tu veux"</h3>
                    <h3>git push --set-upstream origin alex</h3>
                    <br />
                    <p>Si tu as déjà poussé ton travail une première fois, seule la commande <b>push</b> diffère dans le processus, voici les commandes</p>
                    <h3>git add .</h3>
                    <h3>git commit -m "le message que tu veux"</h3>
                    <h3>git push</h3>

                    <br />

                    <p>Te voilà prêt à coder ! N'hésite pas à demander à ton développeur lorsque tu bloques sur quelque chose !</p>

                    <h2>TIPS</h2>

                    <p>Tout <b>bon</b> développeur sait se servir d'internet pour s'aider à débogguer, trouver des notices, des syntaxes... N'hésite pas à utiliser Google pour faire tes recherches et utiliser le site <a href="https://stackoverflow.com" target="_blank">stackoverflow</a> !</p>
                    
                    <h1>ENJOY !</h1>

                </Box>
            </Container>
        </React.Fragment>
    );
}
