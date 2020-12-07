import './App.css';
import BooksHomeList from './books/books-home-list';
import Footer from './layout/Footer';
import Nav from './layout/Nav';
import Login from './pages/Login';
import HomeHeader from './sections/HomeHeader';

function App() {
  return (
    <>

      <Nav />

      <HomeHeader />
      
      <main className="content">

        <BooksHomeList />
        {/* <Login /> */}
        
      </main>  

      <Footer />

    </>
  );
}

export default App;
