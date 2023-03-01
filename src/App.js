import './App.css';
import './fonts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import TextSection from './components/TextSection';

function App() {
  return (
    <div className="App">
        <Hero />
        <TextSection
          title="Our Mission"
          text="Climate change and the pressures on global energy resources are urgent problems.
				The UK has set out an ambitious national clean energy policy to fully decarbonise
				the economy by 2050.
			"
			buttonText="Business Plan"
        />
    </div>
  );
}

export default App;
