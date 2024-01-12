import Mycv from "../../data/Mycv";


const NamePosition = () => {
  return (
    <>
        <span className="nameC">{Mycv.avtAbout[0].nameCMe}</span>
        <span className="nameP">{Mycv.avtAbout[0].namePMe}</span>
        <span className="position">{Mycv.avtAbout[0].position}</span>
    </>
  )
}

export default NamePosition;