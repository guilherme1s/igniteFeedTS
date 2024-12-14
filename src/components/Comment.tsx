import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommentProps {
    content: string;
    onDeleteComments: (comment: string) => void;
}

export function Comment({ content, onDeleteComments }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        
        onDeleteComments(content);
    }

    function handleNewCommentLike() {
        setLikeCount((state) => {
            return state + 1;
        });
    }
    
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/guilherme1s.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Guilherme Silva</strong>
                            <time 
                                title="09 de dezembro de 2024 às 08:13:30" dateTime="2024-12-09: 08:13:30">Publicado há 1 hora
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div> 

                <footer>
                    <button onClick={handleNewCommentLike}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}