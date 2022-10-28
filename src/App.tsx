import styles from './App.module.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import { useAuth } from './hooks/useAuth';

export function App() {
  const { posts } = useAuth();

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.length !== 0
            ? posts.map((post) => {
                return (
                  <Post
                    author={post.author}
                    content={post.content}
                    publishedAt={new Date(post.publishedAt)}
                    key={post.id}
                  />
                );
              })
            : 'You must be logged to see the posts and the avatar'}
        </main>
      </div>
    </div>
  );
}
