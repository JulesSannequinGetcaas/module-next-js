import Link from 'next/link';

export const metadata = {
    title: 'Liste des users',
    description: 'Voici la liste des users',
  }
  

const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    return users;
}

const Users = async () => {
    const users = await getUsers();
    
    return (
        <div>
            <main>
                <h1>Users List</h1>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            <Link href={`/users/${user.id}`}>
                                <p>{user.name}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
};

export default Users;