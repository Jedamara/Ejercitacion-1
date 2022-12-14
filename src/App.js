import SideBar from './components/SideBar';
import './assets/css/app.css'
import TopBar from './components/TopBar';
import ContentRowTop from './components/ContentRowTop';
import Footer from './components/Footer';
import ContentWrapper from './components/ContentWrapper';

function App() {
  return (
    <div id="wrapper">
      <SideBar/>
      <ContentWrapper/>
    </div>
  );
}

export default App;
