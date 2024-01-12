import Mycv from "../../data/Mycv";
import ConTact from "../Contact";
import Education from "../Education";
import Expertise from "../Expertise";
import MyCvTitle from "../MyCvTitle";
import NamePosition from "../NamePosition";
import PersonalSkill from "../PersonalSkill";
import WorkExperence from "../WorkExperence";
import './style.css';

const myStyle = {
    width: '800px',
    margin: '0 auto',
    height: 'auto'
}

const myStyleBlock = {
    margin: 'auto',
    padding: '20px'
}

const MyCV = () => {
  return (
    <div style={myStyle} className="flex justify-center drop-shadow-2xl">
        <div className="cv-left text-center w-2/5 bg-blue-500">
            <div style={myStyleBlock} className="avt">
                <span>
                    <img className="rounded-full" src={Mycv.avtAbout[0].avt} alt="" />
                </span>
            </div>
            <div style={myStyleBlock} className="contact">
                <MyCvTitle title="Contact" />
                <ConTact />
            </div>
            <div style={myStyleBlock} className="expertise">
                <MyCvTitle title="Expertise" />
                <Expertise />
            </div>
            <div style={myStyleBlock} className="persionalSkill">
                <MyCvTitle title="Persional Skill" />
                <PersonalSkill />
            </div>
        </div>
        <div className="cv-right text-center w-3/5 bg-white">
            <div style={myStyleBlock} className="namePosition flex flex-col text-left">
                <NamePosition />
            </div>
            <div style={myStyleBlock} className="about">
                <MyCvTitle title="About me" />
                <p style={{color: 'rgb(157 147 147 / 80%)'}} className="text-left">{Mycv.avtAbout[0].aboutMe}</p>
            </div>
            <div style={myStyleBlock} className="education">
                <MyCvTitle title="Education" />
                <Education />
            </div>
            <div style={myStyleBlock} className="workexperence">
                <MyCvTitle title="Expertise" />
                <WorkExperence />
            </div>
        </div>
    </div>
  )
}

export default MyCV;