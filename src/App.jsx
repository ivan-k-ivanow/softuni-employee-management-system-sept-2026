import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import UserList from './components/UserList';
import UserSearch from './components/UserSearch';
import Pagination from './components/Pagination';

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <section className="card users-container">
          <UserSearch />
          <UserList />
          <Pagination />
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App
