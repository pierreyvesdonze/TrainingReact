import * as React from 'react';

export default function Door() {

    return (
        <div>
            <p>Bravo tu es arrivé jusqu'à la porte d'entrée vers l'épreuve finale de ce premier chapitre ! Cependant la porte ne s'ouvre pas. Il faudrait qu'elle s'ouvre au survol de la souris. Le code existe déjà mais il comporte un tout petit problème, pourrais-tu y jeter un oeil pour déverrouiller la porte stp ?</p>
            <div className="door">
                <div className="door-front">
                    <div className="knob"></div>
                </div>
                <div className="door-back">
                    <span className='door-link'>/final</span>
                </div>
            </div>
        </div>
    )
}