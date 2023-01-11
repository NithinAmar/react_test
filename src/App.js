
import Navbar from './components/Navbar'
import Banner from './components/Home/Banner/Banner'
import Recipes from './components/Home/Banner/Recipes/Recipes'
import About from './components/Home/Banner/about/About'
import Videos from './components/Home/Banner/videos/Videos'
import Contact from './components/Home/Banner/contact/Contact'
import Articles from './components/Home/Banner/articles/Articles'

function App() {
  return (
    <>
    <Navbar />
     <Banner/>
     <Recipes/>
     <About/>
     <Videos/>
     <Contact/>
     <Articles/>
    </>
  );
}

export default App;
