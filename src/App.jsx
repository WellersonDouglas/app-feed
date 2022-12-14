import { Header } from './components/Header/Header'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Post } from './components/Post/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1573496800808-56566a492b63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
      name: 'Jane Cooper',
      role: 'Dev Front-End'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa π' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Γ© DoctorCare π' },
      { type: 'link', content: 'π jane.design/doctorcare '},
    ],
    publisheAt: new Date('2022-09-19 15:50:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
      name: 'Devon Lane',
      role: 'Dev Front-End'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa π' },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfΓ³lio. Foi um baita desafio criar todo o design e codar na unha, mas consegui πͺπ»' },
      { type: 'paragraph', content: 'Acesse e deixe seu feedback'},
      { type: 'link', content: 'π devonlane.design'},
    ],
    publisheAt: new Date('2022-09-19 16:50:00')
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publisheAt={post.publisheAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

