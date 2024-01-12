import Mycv from "../../data/Mycv";

const Education = () => {
  return (
    <div className="text-left flex flex-col">
        {
            Mycv.education.map((educationItem) => {
                return <div className="flex justify-evenly py-3">
                    <div className="flex flex-col w-1/2">
                            <p>{educationItem.nameCInfo}</p>
                            <p>{educationItem.styleSchool}</p>
                        </div>
                        <p className="w-1/2 text-right">
                            {educationItem.year}
                        </p>
                </div>
            })
        }
    </div>
  )
}

export default Education;