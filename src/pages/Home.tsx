import NewHome from '../components/NewHome';
import BrowseHome from '../components/BrowseHome';
import OurProducts from '../components/OurProducts';
import BeautifulHome from '../components/BeautifulHome';
import GridHome from '../components/GridHome';

const Home = () => {
  return (
    <div>
      <NewHome />
      <BrowseHome />
      <OurProducts numCols={4} />
      <BeautifulHome />
      <GridHome />
    </div>    
  );
}

export default Home;
