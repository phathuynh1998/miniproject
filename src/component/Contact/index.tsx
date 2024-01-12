import Mycv from "../../data/Mycv"


const ConTact = () => {
  return (
    <ul>
        {   

            Mycv.contact.map((MycvContact) => {
                return <li className="text-left">
                <span className="nameContact">
                    {MycvContact.nameCInfo}
                </span>
                <span className="valueContact">
                    {MycvContact.valueInfo}
                </span>
            </li>
            })
        }
    </ul>
  )
}

export default ConTact;