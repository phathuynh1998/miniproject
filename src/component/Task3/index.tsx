import { CiCircleMore } from "react-icons/ci";

const Task3 = () => {
  return (
    <div className="weather w-1/2 mx-10 my-20">
        <div className="weatherTop flex flex-row">
            <div className="weatherTop_Left flex flex-col w-1/2">
                <span className="titleWeather">
                    Great day to schedule
                </span>
                <span className="desWeather">
                    Your usual hours
                </span>
            </div>
            <span className="weatherTop_Right w-1/2">
                {<CiCircleMore />}
            </span>
        </div>
        <div className="weatherBottom">

        </div>
    </div>
  )
}

export default Task3;