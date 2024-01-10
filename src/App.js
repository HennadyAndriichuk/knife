import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import './styles/app-styles.scss';

function App () {
   return(
      <div className='main'>
         <div className='mainflow'>
            <Header />
            <Content />
            <Footer /> 
         </div>
      </div>
   );
};

export default App;