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
import Team from "./component/team/Team";
import EmailForm from './component/emailform/EmailForm';
import Slideshow from './component/recommendation/Slideshow';
import RecommendationSite from "./pages/recommendationsite/RecommendationSite";

const App = () => {

  return (

    <div className="App">

      <Layout>
        
        <RecommendationSite />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        
        <Inspired />
        <ImageContainer />
        <PopularProcedures />
        <Slideshow />
        <Team />
        <EmailForm />

      </Layout>

    </div>

  );

};

export default App;
