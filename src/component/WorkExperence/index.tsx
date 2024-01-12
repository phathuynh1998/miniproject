import Mycv from "../../data/Mycv";

const  WorkExperence = () => {
  return (
    <div className="text-left flex flex-col">
        {
            Mycv.wordExperence.map((wordExperenceItem) => {
                return <div className="flex flex-col py-3">
                    <div className="flex w-full">
                        <p className="text-left w-1/2">{wordExperenceItem.nameCInfo}</p>
                        <p className="text-right w-1/2">{wordExperenceItem.year}</p>
                    </div>
                    <span className="w-full text-left">
                        {wordExperenceItem.desExperence}
                    </span>
                </div>
            })
        }
    </div>
  )
}

export default WorkExperence;