import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"


import HitSampraday from "./Components/Sampraday"
import HitSahitya from "./Components/Sahitya"
import UtsavPad from "./Components/UtsavPad"
import BrajDarshan from "./Components/BrajDarshan"
import SantDarshan from "./Components/SantDarshan"
import SocialActivity from "./Components/SocialActivity"
import BrajVrindavan from "./Elements/BrajImage/BrajVrindavan"
import BrajMathura from "./Elements/BrajImage/BrajMathura"
import BrajBarsana from "./Elements/BrajImage/BrajBarsana"
import BrajGovardhan from "./Elements/BrajImage/BrajGovardhan"
import BrajNand from "./Elements/BrajImage/BrajNandGOan"
import BrajGokul from "./Elements/BrajImage/BrajGokul"


const App=()=>{
  const display=(
    <>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hit-sampraday" element={<HitSampraday/>} />
        <Route path="/hit-sahitya" element={<HitSahitya/>} />
        <Route path="/utsav-pad" element={<UtsavPad/>} />
        <Route path="/braj-darshan" element={<BrajDarshan/>} />
        <Route path="/sant-darshan" element={<SantDarshan/>} />
        <Route path="/social-activity" element={<SocialActivity/>} />
        <Route path="/braj-vrindavan" element={<BrajVrindavan />} />
        <Route path="/braj-mathura" element={<BrajMathura />} />
        <Route path="/braj-barsana" element={<BrajBarsana />} />
        <Route path="/braj-govardhan" element={<BrajGovardhan />} />
        <Route path="/braj-nand" element={<BrajNand />} />
        <Route path="/braj-gokul" element={<BrajGokul />} />
       </Routes>
      </BrowserRouter>
    </>
  )
  return display
}
export default App
{/* <li className="hover:text-blue-600 cursor-pointer"><Link to="/">Home</Link></li>
          <li className="hover:text-blue-600 cursor-pointer"><Link to="/about-us">About</Link></li>
          <li className="hover:text-blue-600 cursor-pointer"><Link to="/online-seva">Online Seva</Link></li>
          <li className="hover:text-blue-600 cursor-pointer"><Link to="/sahitya">Sahitya</Link></li>
          <li className="hover:text-blue-600 cursor-pointer"><Link to="/utsav-patrika">Utsav Patrika</Link></li>
          <li className="hover:text-blue-600 cursor-pointer"><Link to="/related-places">Related Places</Link></li>
          <li className="hover:text-blue-600 cursor-pointer"><Link to="/contact-us">Contact Us</Link></li>
          <li className="hover:text-blue-600 cursor-pointer"><Link to="/donate"><Button>DONATE</Button></Link></li> */}