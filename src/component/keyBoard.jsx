// Keyboard.jsx
import React, { useState } from 'react';
import Btn from "./button";
import ChooseLanguage from "./chooseLanguage";

const Keyboard = ({nextColor,changeColor,setValue}) => {
    const [flag, setFlag] = useState(true);

    const hebrewLetters = "קראטוןםפשדגכעיחלךףזסבהנמצתץ".split("");
    const englishLetters = "qwertyuiopasdfghjklzxcvbnm".split("");
    const smilies =["😄","😅","😆","😉","😊","😇","🥰","😍","😘"];
    const toggleLanguage = () => {
        setFlag(!flag);
    }
    let write = (letter) => {
        if (letter === "clear all") {
          setValue("");
        }
        else if (letter === "upper all"){
            setValue((prevValue) => prevValue.replaceAll(/[a-z]/g, (letter) => letter.toUpperCase()));
        }
        else if (letter === "<="){
            setValue((prevValue) => prevValue.slice(0, -1));
        }
        else if (letter === "lower all"){
            setValue((prevValue) => prevValue.replaceAll(/[A-Z]/g, (letter) => letter.toLowerCase()));
        }
        else {
          setValue((prevValue) => (letter === "space" ? prevValue + `\u00A0` : prevValue + letter));
        }
      };

    return (
            <div className="Keyboard">
               {smilies.map((letter, index) => <Btn className="hebrew" key={index} write={write} letter={letter} />)}
                {flag
                    ? englishLetters.map((letter, index) => <Btn className="hebrew" key={index} write={write} letter={letter} />)
                    : hebrewLetters.map((letter, index) => <Btn className="english" key={index} write={write} letter={letter} />)}
                <Btn write={write} letter={"space"} />
                <Btn write={write} letter={"clear all"} />
                <Btn write={write} letter={"upper all"} />
                <Btn write={write} letter={"lower all"} />
                <Btn write={write} letter={"<="} />
                <Btn letter={nextColor} changeColor={changeColor} isColor={true} />
                <ChooseLanguage toggleLanguage={toggleLanguage} />
            </div>
    )
}

export default Keyboard;
