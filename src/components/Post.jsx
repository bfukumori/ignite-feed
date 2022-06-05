import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/bfukumori.png" />
          <div className={styles.authorinfo}>
            <strong>Bruno Fukumori</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="05 de junho de 2022" dateTime="2022-06-05 00:13:38">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
          deserunt aperiam molestias hic necessitatibus sapiente facere
          voluptate, rem nihil officiis magni cupiditate explicabo aspernatur et
          accusamus, eum similique quae. Ab.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
          deserunt aperiam molestias hic necessitatibus sapiente facere
          voluptate, rem nihil officiis magni cupiditate explicabo aspernatur et
          accusamus, eum similique quae. Ab.
        </p>
        <p>
          <a href="#">bfukumori/ignitefeed</a>
        </p>
        <p>
          <a href="#">#reactjs</a> <a href="#">#ignite</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
