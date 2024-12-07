import Navbar from "./components/Navbar";
import Section1 from "./components/section1/Section1";
import ImageSection from "./components/ImageSection";
import ImageBottom from "./components/ImageBottom";
import Page2 from "./components/Page2";
import SectionCard from "./components/sectionCard/SectionCard";
import Section3 from "./components/section3/Section3";
import Section4 from "./components/section4/Section4";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <div>
       <Navbar/>
       <Section1/>
       <ImageSection/>
       <ImageBottom/>
       <Page2/>
       <SectionCard/>
       <Section3/>
       <Section4/>
       <Footer/>
    </div>
  )
}

export default App;