
type TLanguageC = {
    label: string;
    stat?: boolean;
}

const LanguageC = ({label, stat = false} : TLanguageC) => {
    let colorButton = "";

    if(stat === false) {
        colorButton = "bg-green-50";
    } else if (stat === true) {
        colorButton = "bg-pink-50";
    }
    return (
        <div className={`${colorButton} flex flex-row px-3 mx-5 rounded-md`}>
            <span className="px-2">{label}</span>
            <span className="px-2">x</span>
        </div>
    );
} 

const Task2 = () => {
  return (
    <div className="listLagCode flex flex-row">
        <LanguageC label="Angular"/>
        <LanguageC label="Svelte"/>
        <LanguageC label="Next" stat={true} />
    </div>
  )
}

export default Task2;