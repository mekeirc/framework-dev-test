import "./App.css";
import "./fonts.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import TextSection from "./components/TextSection";
import ImageSection from "./components/ImageSection";
import SliderSection from "./components/SliderSection";
import SpaceView from "./images/space-view.png";
import Memberships from "./components/Memberships";
import Contact from "./components/Contact";

function App() {
	return (
		<div className="App">
			<Hero />
			<TextSection
				title="Our Mission"
				text="Climate change and the pressures on global energy resources are urgent problems.
				The UK has set out an ambitious national clean energy policy to fully decarbonise
				the economy by 2050."
				buttonText="Business Plan"
			/>
			<ImageSection
				image={SpaceView}
				title="About Us"
				text="Climate change and the pressures on global energy resources are urgent problems.."
				subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna vitae elementum interdum scelerisque quisque donec nulla. Velit diam quam nullam elit hac sit. Nunc, lacus, facilisis mattis amet mauris volutpat dui tellus nam. Neque, rhoncus placerat vitae arcu habitant. Dignissim quam ipsum dolor egestas non orci. At enim ut elementum."
				buttonText="About Us"
			/>
			<SliderSection
				title="Our Objectives"
				text="Convene an international partnership for development of space based energy."
				subText="The UK has set out an ambitious national clean energy policy – Net Zero – to fully decarbonise the economy by 2050. This future energy scenario requires clean and sustainable energy generation from renewable sources."
				buttonText="Business Plan"
			/>
			<Memberships />
			<Contact />
		</div>
	);
}

export default App;
