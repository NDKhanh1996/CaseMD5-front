import PrimarySearchAppBar from "./components/topAppBar/AppBar";
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
