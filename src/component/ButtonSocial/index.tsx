
type TButtonSocial = {
    label: string;
    varian?: string;
}

const ButtonSocial = ({label, varian = ''} : TButtonSocial) => {
    let myStyle = "bg-slate-900  border-slate-900 text-white";
  if(varian === 'outline') {
    myStyle = "bg-white text-slate-900 border-slate-900";
  } else if(varian === 'success') {
    myStyle = "bg-green-500 text-white border-green-500";
  }
  return (
    <button className={` ${myStyle}  flex border-2 justify-center items-center gap-x-3 py-3 px-4 rounded-full`}>Login with {label}</button>
  )
}

export default ButtonSocial;