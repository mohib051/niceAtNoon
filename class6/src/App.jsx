import { useState } from "react";

const App = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [empid, setempid] = useState("");
  const [imgurl, setimgurl] = useState("");

  const [allusers, setallusers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");

    const newarr = [...allusers, { name, email, empid, imgurl }];
    setallusers(newarr);

    setname("");
    setemail("");
    setempid("");
    setimgurl("");
  };
  const handleDelete = (index)=>{
    const copyUser =[...allusers]
      copyUser.splice(index,1)
      setallusers(copyUser)
    console.log("delte")
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-3  flex gap-3" action="">
        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          className="border-2 border-black p-2"
          type="text"
          placeholder="enter your name"
        />

        <input
          value={email}
          onChange={(e) => setemail(e.target.value)}
          className="border-2 border-black p-2"
          type="text"
          placeholder="enter your email"
        />
        <input
          value={imgurl}
          onChange={(e) => setimgurl(e.target.value)}
          className="border-2 border-black p-2"
          type="text"
          placeholder="enter image url"
        />

        <input
          value={empid}
          onChange={(e) => setempid(e.target.value)}
          className="border-2 border-black p-2"
          type="text"
          placeholder="enter employee id"
        />
        <input className="bg-blue-200 p-3 cursor-pointer" type="submit" />
      </form>

      {allusers.map((item, index) => (
        <div
          key={index}
          id="card-div"
          className="w-72 h-auto p-7 border-2 bg-slate-100 mx-auto flex flex-col  items-center gap-5 mt-14 "
        >
          <div id="img-div" className=" w-36 h-36">
            <img
              className=" w-full h-full rounded-full"
              src={item.imgurl}
              alt=""
            />
          </div>
          <h1 className="font-bold text-2xl uppercase">{item.name}</h1>
          <h1 className="font-semibold text-1xl">{item.email}</h1>
          <h1 className="font-semibold text-2xl uppercase">{item.empid}</h1>
          <button onClick={()=>handleDelete(index)} className="bg-red-400 p-3">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default App;
