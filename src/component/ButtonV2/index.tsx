const CssButton = {border: '1px solid red', color: 'red', margin: '0 5px'};

const ButtonV2 = ({label} : {label : string}) => {
    return <button style={CssButton} >{label}</button>
}

export default ButtonV2;