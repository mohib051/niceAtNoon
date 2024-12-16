
import Card from "./components/Card"
const App = () => {
  const data = [
    {
      userName: "Sharukh khan",
      profile: "https://images.unsplash.com/photo-1543205089-ca3138862004?w=600&q=80",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, iste.",
      isFriend: true
    },
    {
      userName: "Sundar kanya",
      profile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      isFriend: true
    },
    {
      userName: "Milkha Singh",
      profile: "https://images.unsplash.com/photo-1658836516479-b986ea8fede7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGF0aGVsZXRlfGVufDB8fDB8fHww",
      bio: "Lorem ipsum dolor sit amet.",
      isFriend: false
    },
    {
      userName: "Amitabh Bachchan",
      profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&q=80",
      bio: "An actor who has defined generations.",
      isFriend: true
    },
    {
      userName: "Sachin Tendulkar",
      profile: "https://images.unsplash.com/photo-1550525811-e5869dd03032?w=600&q=80",
      bio: "Master Blaster and a cricket legend.",
      isFriend: false
    },
    {
      userName: "Priyanka Chopra",
      profile: "https://images.unsplash.com/photo-1541753866388-0b3c701627d3?w=600&q=80",
      bio: "Actress, producer, and philanthropist.",
      isFriend: true
    },
    {
      userName: "Elon Musk",
      profile: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&q=80",
      bio: "Visionary entrepreneur and founder of Tesla.",
      isFriend: true
    },
    {
      userName: "Mark Zuckerberg",
      profile: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&q=80",
      bio: "Co-founder and CEO of Facebook.",
      isFriend: false
    },
    {
      userName: "Ratan Tata",
      profile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80",
      bio: "Industrialist and philanthropist.",
      isFriend: true
    },
    {
      userName: "Virat Kohli",
      profile: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=600&q=80",
      bio: "Run-machine and a cricket icon.",
      isFriend: false
    },
    {
      userName: "Katrina Kaif",
      profile: "https://images.unsplash.com/photo-1593824294257-6d5ec9f5d81f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWwlMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D",
      bio: "Actress known for her iconic roles.",
      isFriend: true
    },
    {
      userName: "APJ Abdul Kalam",
      profile: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=600&q=80",
      bio: "Missile Man of India and a visionary leader.",
      isFriend: false
    },
    {
      userName: "Narendra Modi",
      profile: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&q=80",
      bio: "Prime Minister of India.",
      isFriend: true
    },
    {
      userName: "MS Dhoni",
      profile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
      bio: "Captain cool and an inspiration to many.",
      isFriend: false
    },
    {
      userName: "Deepika Padukone",
      profile: "https://images.unsplash.com/photo-1679136342040-b07df4ab0c9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsJTIwZ2lybHN8ZW58MHx8MHx8fDA%3D",
      bio: "Bollywood superstar and mental health advocate.",
      isFriend: true
    },
    {
      userName: "Sundar Pichai",
      profile: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=600&q=80",
      bio: "CEO of Google and Alphabet.",
      isFriend: true
    },
    {
      userName: "Kalpana Chawla",
      profile: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&q=80",
      bio: "Astronaut and an inspiration to women.",
      isFriend: false
    },
    {
      userName: "Ranveer Singh",
      profile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
      bio: "Actor known for his versatility and energy.",
      isFriend: true
    }
  ];
  
  return (
    <>
      
          <div id="main-div" className="flex items-center justify-center w-full h-screen gap-4 flex-wrap px-2 py-7">
          {data.map((val,index)=>(
          <Card key={index}  name={val.userName} image={val.profile} bio={val.bio} isFriend = {val.isFriend}/>
      ))}    
          </div>
          
    
    </>
   
  )
}

export default App