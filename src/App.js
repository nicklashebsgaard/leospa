// SCSS
import './App.scss';
import './reset.scss';

// Route, Routes
import {Route, Routes} from 'react-router-dom';

// COMPONENT
import Layout from './component/layout/Layout';
import Home from './pages/home/Home';
import Inspired from './component/inspired/Inspired';
import ImageContainer from "./component/imageContainer/ImageContainer";
import PopularProcedures from './component/popularProcedures/PopularProcedures';
import Quotes from './component/quotes/Quotes';
import Team from "./component/team/Team";
import EmailForm from './component/emailform/EmailForm';


const App = () => {

  return (

    <div className="App">

      <Layout>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        
        <Inspired />
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
