
import SampradayUtsavEl from "../../Elements/BrajImage/BrajSlider"
import CarouselEl from "../../Elements/Carousel"
import AboutShriHitHarivansh from "../../Elements/HomeAb2"
import AboutShriHitRadhavallabh from "../../Elements/HomeAb3"
import AboutShriHitNimishGoswami from "../../Elements/HomeAb4"
import FullVideoSection from "../../Elements/HomeFullVideo"
import TimingSection from "../../Elements/HomeTiming"
import HomeUtsav from "../../Elements/HomeUtsav"
import VideoSection from "../../Elements/HomeVideo"
import SahityaHSlider from "../../Elements/Sahitya/SahityaHSlider"
import SantSliderEl from "../../Elements/SantDarshan/SantSlider"
import LayoutEl from "../../Shared/Layout"



const Home=()=>{
    const display=(
        <>
          <LayoutEl>
            <CarouselEl/>
            <HomeUtsav/>
            <TimingSection/>
            <AboutShriHitHarivansh/>
            <AboutShriHitRadhavallabh/>
            <AboutShriHitNimishGoswami/>
            <FullVideoSection/>
            
     
            <SahityaHSlider/>
             <SantSliderEl/>
             <SampradayUtsavEl/>
             <VideoSection/>
          </LayoutEl>
        </>
    )
    return display
}
export default Home