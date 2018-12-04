import React from 'react';
import "./Spinner.scss"
import { SyncIcon } from 'mdi-react';

const Spinner = () => {
    return (
        <div className="spinner__container">
            <SyncIcon className="spinner__spinning" size={26} />
            <p>Caricamento ...</p>
        </div>
    );
}

export default Spinner;