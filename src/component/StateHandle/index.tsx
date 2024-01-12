import { AiOutlineLike } from "react-icons/ai";

const StateHanle = () => {
  let myStyle = {};
  const handleClick = () => {
    myStyle = {color: 'blue'};
  }

  return (
    <div onClick={handleClick} style={myStyle} className="flex text-left items-center">
      <span className="iconLike"><AiOutlineLike /></span>
      <span className="iconText">Thích</span>
    </div>
  )
}

export default StateHanle;