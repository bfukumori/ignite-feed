import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { useAuth } from '../hooks/useAuth';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { CommentData } from './Post';
import { ptBR } from 'date-fns/locale';

interface CommentProps {
  comment: CommentData;
  onDeleteComment: (id: string) => void;
}

export function Comment({ comment, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);
  const { user } = useAuth();

  function handleDeleteComment() {
    onDeleteComment(comment.id);
  }

  function handleLikeComment() {
    setLikeCount((value) => value + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={user.avatar} alt='Imagem do avatar' />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{user.username}</strong>
              <time title='05 de junho de 2022' dateTime='2022-06-05 00:13:38'>
                {formatDistanceToNow(comment.createdAt, {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{comment.content}</p>
        </div>
        <footer className={styles.footer}>
          <button type='button' onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
