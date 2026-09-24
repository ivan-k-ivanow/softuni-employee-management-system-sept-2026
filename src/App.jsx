import './styles.css';
import SaveUserModal from './components/SaveUserModal';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import UserList from './components/UserList';
import UserSearch from './components/UserSearch';
import Pagination from './components/Pagination';

const baseUrl = 'https://wvxsshmemqotouxkzhqe.supabase.co/rest/v1/users';
const apiKey = 'sb_publishable_YakXuX-44-KSSK3jvxe02Q__s_3zhC1';

function App() {
    const [users, setUsers] = useState([]);
    const [showSaveUserModal, setShowSaveUserModal] = useState(false);

    useEffect(() => {
        // Fetch users from the API when the component mounts
        fetchUsers()
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);



    const addUserClickHandler = () => {
        setShowSaveUserModal(true);
    }

    const addUserCloseHandler = () => {
        setShowSaveUserModal(false);
    }

    const submitUserHandler = async (user) => {
        // Send user to Rest API
        try {
            await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': apiKey,
                },
                body: JSON.stringify(user)
            });

            const updatedUsers = await fetchUsers();
            setUsers(updatedUsers);
            
        } catch (error) {
            console.error('Error adding user:', error);
        } finally {
            setShowSaveUserModal(false);
        }
    };

    return (
        <>
            <Header />

            <main className="main">
                <section className="card users-container">
                    <UserSearch />
                    <UserList users={users} />

                    <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>
                    {showSaveUserModal && <SaveUserModal onClose={addUserCloseHandler} onSubmit={submitUserHandler} />}
                    <Pagination />
                </section>
            </main>

            <Footer />
        </>
    )
}

async function fetchUsers() {
    const response = await fetch(baseUrl, {
        headers: {
            'apikey': apiKey,
        }
    });
    const data = await response.json();
    return data;
}

export default App
