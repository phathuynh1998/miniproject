import { FaHeart } from "react-icons/fa";
import { videov1 } from "../../data/videov1";

const VideoV1 = () => {
  return (
    <div>
        <p>5 Video</p>
        <div className="listVideo">
           {
            videov1.map((video)=>{
                return (
                    <div className='flex w-1/2'>
                        <span className="w-1/5">
                            <img src={video.thumb} alt="" />
                        </span>
                        <div className="w-3/5 flex flex-col">
                            <span>{video.title}</span>
                            <span>{video.des}</span>
                        </div>
                        <span className="w-1/5">
                            {<FaHeart />}
                        </span>
                    </div>
                )
            })

           }
        </div>
    </div>
  )
}

export default VideoV1;