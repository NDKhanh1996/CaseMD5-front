import PrimarySearchAppBar from "./components/AppBar";
import MainSection from "./components/sections/MainSection";
import CarouselSection from "./components/carouselSection/carouselSection";

function App() {
    return (
        <div>
            <PrimarySearchAppBar/>
            <CarouselSection/>
            <MainSection/>
        </div>
    );
}

export default App;
