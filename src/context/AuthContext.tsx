import React, { createContext, useEffect, useState } from 'react';
import { Author, Content } from '../components/Post';
import { api } from '../libs/api';

interface User {
  username: string;
  bio: string;
  avatar: string;
}

type Post = {
  id: number;
  author: Author;
  content: Content[];
  publishedAt: Date;
};

interface AuthContextData {
  user: User;
  posts: Post[];
  mockLogin: () => void;
  mockLogout: () => void;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>({} as User);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem('is-authenticated') ? true : false
  );

  async function fetchUser() {
    const response = await api.get('/user');
    setUser(response.data);
  }

  async function fetchPosts() {
    const response = await api.get('/posts');
    setPosts(response.data.posts);
  }

  async function mockLogin() {
    await api.post('/login');
    setIsAuthenticated(true);
  }

  async function mockLogout() {
    sessionStorage.removeItem('is-authenticated');
    setUser({} as User);
    setPosts([]);
    setIsAuthenticated(false);
  }

  useEffect(() => {
    if (isAuthenticated) {
      fetchUser();
      fetchPosts();
    }
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ user, posts, mockLogin, mockLogout }}>
      {children}
    </AuthContext.Provider>
  );
}
