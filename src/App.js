// SCSS
import './App.scss';
import './reset.scss';

// COMPONENT
import Layout from './component/layout/Layout';
import Home from './pages/home/Home';
import ImageContainer from "./component/imageContainer/ImageContainer";
import PopularProcedures from './component/popularProcedures/PopularProcedures';
import Quotes from './component/quotes/Quotes';
import Team from "./component/team/Team";
import EmailForm from './component/emailform/EmailForm';


const App = () => {

  return (

    <div className="App">

      <Layout>
        <Home />
        <ImageContainer />
        <PopularProcedures />
        <Quotes />
        <Team />
        <EmailForm />
      </Layout>

    </div>

  );

};

export default App;
