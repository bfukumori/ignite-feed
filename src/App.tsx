import { Header } from "./components/Header";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/bfukumori.png",
      name: "Bruno Fukumori",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        contentText:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa deserunt aperiam molestias hic necessitatibus sapiente facere voluptate, rem nihil officiis magni cupiditate expl.",
      },
      {
        type: "paragraph",
        contentText:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa deserunt aperiam molestias hic necessitatibus sapiente facere voluptate, rem nihil officiis magni cupiditate explicabo aspernatur et accusamus, eum similique quae. Ab.",
      },
      { type: "link", contentText: "bfukumori/ignite-feed" },
    ],
    publishedAt: new Date("2022-06-05 18:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO Rocketseat",
    },
    content: [
      {
        type: "paragraph",
        contentText:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa deserunt aperiam molestias ficiis magni cupiditate explicabo aspernatur et accusamus, eum similique quae. Ab.",
      },
      {
        type: "paragraph",
        contentText:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa deserunt aperiam molestias hic necessitatibus sapiente facere voluptate, rem nihil officiis magni cupiditate explicabo aspernatur et accusamus, eum similique quae. Ab.",
      },
      { type: "link", contentText: "diego3g/ignite-feed" },
    ],
    publishedAt: new Date("2022-05-10 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                key={post.id}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
