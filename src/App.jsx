import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <main className="relative h-screen w-full snap-y snap-mandatory overflow-auto">
        <div className="snap-center">
          <Header />
          <Hero
            model="Model Y"
            subtitle="Lease starting at $399/mo*"
            botton1="order now"
            botton2="demo drive"
            footertext="*Excludes taxes and fees with price subject to change. Available in select states."
            footerlink="See Details"
            video="/Homepage-Model-Y-Desktop-NA.webm"
          />
        </div>
        <div className="snap-center">
          <Header />
          <Hero
            model="Model 3"
            subtitle="Lease starting at $329/mo*"
            botton1="order now"
            botton2="demo drive"
            footertext="*Excludes taxes and fees with price subject to change. Available in select states."
            footerlink="See Details"
            imagen="asset 16.avif"
          />
        </div>
        <div className="snap-center">
          <Header />
          <Hero
            model="Model X"
            subtitle="From $68,590*"
            span="After Federal Tax Credit & Est. Gas Savings"
            botton1="order now"
            botton2="learn more"
            footertext="*Price before incentives and savings is $79,990, excluding taxes and fees. Subject to change."
            footerlink="Learn about est. gas savings."
            imagen="asset 17.jpeg"
          />
        </div>
        <div className="snap-center">
          <Header />
          <Hero
            model="Model S"
            subtitle="From $71,090*"
            span="After Est. Gas Savings"
            botton1="order now"
            botton2="learn more"
            footertext="*Price before incentives and savings is $79,990, excluding taxes and fees. Subject to change."
            footerlink="Learn about est. gas savings."
            imagen="asset18.avif"
          />
        </div>
        <div className="snap-center">
          <Header />
          <Hero
            model="Experience Tesla"
            subtitle="Schedule a Demo Drive Today"
            botton1="Demo Drive"
            botton2="Cambiar"
            video="Home.webm"
          />
        </div>
        <div className="snap-center">
          <Header />
          <Hero
            model="Solar Panels"
            link="Schedule a Virtual Consultation"
            botton1="order now"
            botton2="Learn more"
            imagen="asset 19.jpeg"
          />
        </div>
        <div className="snap-center">
          <Header />
          <Hero
            model="Solar Roof"
            subtitle="Plaid"
            botton1="order now"
            botton2="learn more"
            imagen="asset 20.jpeg"
          />
        </div>
        <div className="snap-center">
          <Header />
          <Hero
            model="Powerwall"
            botton1="order now"
            botton2="learn more"
            imagen="asset 21.avif"
          />
        </div>
        <div className="snap-center">
          <Header />
          <Hero model="Accessories" botton2="shop now" imagen="asset 22.avif" />
        </div>
      </main>
    </>
  );
}

export default App;
