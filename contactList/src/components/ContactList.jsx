
// eslint-disable-next-line react/prop-types
const ContactList = ({name, company, phone}) => {
 
  console.log("in contact page",name, company, phone);
  
  return (
           <div id="showdiv" className=' bg-slate-100 w-[200px] h-[200px] flex flex-col p-2'>
            <h1 className='text-xl font-bold'>{name}</h1>
            <h1>Company : {company}</h1>
            <h1>Phone : <span>{phone}</span></h1>
            <div className='bg-yellow-400 text-white font-semibold rounded-md w-[100px] p-2'>Favorite</div>
           </div>
  )
}

export default ContactList