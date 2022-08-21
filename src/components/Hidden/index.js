import * as React from 'react';
import ButtonAction from './ButtonAction';

export default function Hidden() {
    return (
        <>
            <div className='bonjour-hidden'>
                Bonjour, je suis invisible mais ce n'est pas moi que tu cherches.
            </div>
            <div className='button-transparent'>
                <ButtonAction />
            </div>
        </>
    )
}