import Mycv from "../../data/Mycv";

const Expertise = () => {
  return (
    <div className="listExpertise">
        {   
            Mycv.expertise.map((exertiseItem) => {
                const dots = [1,2,3,4,5];
                return <div className="flex justify-content">
                            <span className="flex w-1/2">{exertiseItem.nameCInfo}</span>
                            <div className="flex w-1/2">
                                {
                                    dots.map((dot) => {
                                        if(dot <= exertiseItem.valueInfo) {
                                            return <span className="rounded-full bg-amber-400 w-3 h-3"></span>
                                        }

                                        return <span className="rounded-full bg-gray-50 w-3 h-3"></span>
                                    })
                                }
                            </div>
                        </div>
            }) 
        }
    </div>
  )
}

export default Expertise;