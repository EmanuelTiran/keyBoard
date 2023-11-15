import React from 'react';

const ChooseLanguage = ({ toggleLanguage }) => {
    return (
        <button id='language' onClick={toggleLanguage}>
            Language
        </button>
    );
}

export default ChooseLanguage;
