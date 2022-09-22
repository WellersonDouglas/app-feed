import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'
import styles from './Comment.module.css'

import { useState } from 'react'
import {Modal} from '../Modal'

export function Comment({ content, onDeleteComment}) {
    const [openModal, setOpenModal] = useState(false)        
    
    function handleopenModal() {
        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/WellersonDouglas.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Wellerson Douglas</strong>
                            <time
                                title='19 de Setembro às 16:38h'
                                dateTime='2022-09-19 16:38:00'
                            >Cerca de 1h atrás</time>
                            </div>
                        <button
                            onClick={() => setOpenModal(true)}
                            title='Deletar comentário'>   
                            <Trash size={20} />
                        </button>
                        <Modal
                            open={openModal}
                            onClose={() => setOpenModal(false)}
                            className={styles.modalBtn}
                        />
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={24} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}