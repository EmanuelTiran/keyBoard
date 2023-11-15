// Btn.jsx
import React from "react";

let Btn = (props) => {
    // console.log(props);
    // let isLetter = props.letter.length <= 1|| props.letter==="space";
    return <button onClick={() => props.isColor ?   props.changeColor():props.write(props.letter)}
        style={{ color: props.isColor ? props.letter  : "beige"}}>{props.letter}</button>;
};
export default Btn;
