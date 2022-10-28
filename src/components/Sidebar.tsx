import { PencilLine } from 'phosphor-react';
import { useAuth } from '../hooks/useAuth';
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
  const { user, mockLogin, mockLogout } = useAuth();

  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        title='Imagem do cover da sidebar'
      />
      <div className={styles.profile}>
        <Avatar src={user.avatar} alt='Imagem do avatar' />
        <strong>{user.username}</strong>
        <span>{user.bio}</span>
      </div>
      <footer>
        <button type='button' onClick={mockLogin}>
          Login
        </button>
        <button type='button' onClick={mockLogout}>
          Log out
        </button>
      </footer>
    </aside>
  );
}
