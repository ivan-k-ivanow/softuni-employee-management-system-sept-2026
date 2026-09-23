import './styles.css';

import { useState, useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import UserList from './components/UserList';
import UserSearch from './components/UserSearch';
import Pagination from './components/Pagination';

function App() {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    fetch('https://wvxsshmemqotouxkzhqe.supabase.co/rest/v1/users', {
      headers: {
        'apikey': 'sb_publishable_YakXuX-44-KSSK3jvxe02Q__s_3zhC1',
      }
    })
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <>
      <Header />

      <main className="main">
        <section className="card users-container">
          <UserSearch />
          <UserList users={users} />

          <button className="btn-add btn">Add new user</button>s

          <Pagination />
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App
