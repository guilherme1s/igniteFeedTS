import { ChangeEvent, FormEvent, useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

interface Author {
    id: number;
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType;
}

export function Post({ post }: PostProps) {
    const [comments, setComments] = useState(["Post muito daora!"]);
    const [newCommentText, setNewCommentText] = useState("");

    const publishedDateFormated = new Intl.DateTimeFormat("pt-br", {
        day: "2-digit",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
    }).format(post.publishedAt);

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
        setComments((prevComments) => [...prevComments, newCommentText]);
        setNewCommentText("");
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewCommentText(event.target.value);
    }

    function deleteComment(deletedComment: string) {
        const commentsWithoutDeletedOne = comments.filter(
            (comment) => comment !== deletedComment
        );
        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} alt="" />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormated} dateTime={publishedDateFormated}>
                    {publishedDateFormated}
                </time>
            </header>

            <div className={styles.content}>
                {post.content.map((line) => {
                    if (line.type === "paragraph") {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === "link") {
                        return (
                            <p key={line.content}>
                                <a href="#">{line.content}</a>
                            </p>
                        );
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    name="inputComment"
                    placeholder="Deixe um comentário"
                    required
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment) => {
                    return (
                        <Comment
                            onDeleteComments={deleteComment}
                            key={comment}
                            content={comment}
                        />
                    );
                })}
            </div>
        </article>
    );
}
