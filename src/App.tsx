import { Post, PostType } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  const posts: PostType[] = [
    {  
      id: 1,
      author: {
        id: 10,
        name: "Guilherme Silva",
        role: "Web Developer",
        avatarUrl: "https://github.com/guilherme1s.png"
      },
      publishedAt: new Date('2024-12-11T12:09:00'),
      content: [ 
        { type: "paragraph", content: "Fala galeraa 👋" },
        { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
        { type: "link", content: "jane.design/doctorcare" }
      ]
    },
    {  
      id: 2,
      author: {
        id: 11,
        name: "Mica da Silva",
        role: "Web Developer",
        avatarUrl: "https://images.unsplash.com/photo-1534761048360-953ec4f86aba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRldnxlbnwwfHwwfHx8MA%3D%3D"
      },
      publishedAt: new Date('2024-12-11T12:09:00'),
      content: [ 
        { type: "paragraph", content: "Olá!" },
        { type: "paragraph", content: "Acabei de ler o liro código limpo! É muito bom e muito mada" },
      ]
    },
  ];

  return (
    <div>
      <Header />
    
      <div className={styles.wrapper}>
      <Sidebar />

      <main>
        {posts.map((post) => {
          return ( 
            <Post 
              key={post.id}
              post={post}
            />
          );
        })}
      </main>
    </div>
  </div>
  )
}


