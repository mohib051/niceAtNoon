import { useEffect, useState } from 'react'
import ContactList from './ContactList'

const Form = () => {
  
  const [name, setname] = useState("")
  const [company, setcompany] = useState("")
  const [phone, setphone] = useState("")

  const [allusers, setallusers] = useState([]);

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(name)
        console.log(company)
        console.log(phone)
        setname("")
        setcompany("")
        setphone("")
        setallusers([...allusers, {userName : name, userCompany : company,userPhone : phone}]);
    }

    useEffect(() => {
      console.log(allusers); // Logs the updated state whenever it changes
    }, [allusers]);
   

  return (
    <div className=' w-full  bg-gray-500 p-3 flex gap-2'>
        <form onSubmit={(e)=>handleSubmit(e)} className=' flex flex-col bg-slate-100 w-1/2' >
          <h1>Add Contact</h1>
          <label>Name : </label>
          <input required value={name} onChange={(e)=> setname(e.target.value)} type="text"  placeholder='name'/>
          <label>Company : </label>
          <input value={company} onChange={(e)=>setcompany(e.target.value)} type="text"  placeholder='Company'/>
          <label>Phone  : </label>
          <input required value={phone} onChange={(e)=>setphone(e.target.value)} type="text"  placeholder='Phone'/>

          <label className='inline-flex items-center' >
                <input type="checkbox" className='mr-2' />
                <span>Favorite</span>  
          </label>
          <input className="bg-blue-200 p-3 cursor-pointer" type="submit" value="Add to Contact" />
        </form>
        <div className='w-1/2 bg-zinc-200 flex flex-wrap gap-3 justify-between'>
        <h1>Contact List</h1>
        {allusers.map((item, index)=>{
          return <ContactList key={index} name={item.userName} company={item.userCompany} phone={item.userPhone} />
        })}
        </div>
        
        
    </div>
  )
}

export default Form