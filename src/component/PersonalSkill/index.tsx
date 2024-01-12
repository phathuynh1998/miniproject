import Mycv from "../../data/Mycv";

const PersonalSkill = () => {
  return (
    <ul className="text-left">
        {
            Mycv.persional.map((persionalItem) => {
                return <li>{persionalItem.nameCInfo}</li>
            })
        }
    </ul>
  )
}

export default PersonalSkill;