
let Screen = ({ letter, myColor }) => {

    let char = letter;
    let myColor2 =myColor;
    return <div id="text">
        <span style={{ color:myColor2 }}>{char}</span>
        <span id="marker">|</span>
    </div>
}
export default Screen;
