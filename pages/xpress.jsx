import styles from '../styles/xpress.module.css'
import Layout from '../components/layout'
import { useState, useEffect } from 'react'
import Split from "react-split"
import { onSnapshot, addDoc, doc, deleteDoc, setDoc } from "firebase/firestore"
import { postsCollection, db } from "../database/postData"

function LeftSideBar() {
    return (
        <section className={styles['left-sidebar']}>
            <div>
                avatar
            </div>
        </section>
    )

}

function Content() {
    const [content, setContent] = useState('');
    const [posts, setPosts] = useState([]);

    posts.sort((a, b) => b.createdAt - a.createdAt)
    useEffect(() => {
        const unsubscribe = onSnapshot(postsCollection, (snapshot) => {
            const postsArr = snapshot.docs.map(doc => {
                return (
                    {
                        ...doc.data(),
                        id: doc.id
                    }
                )
            })
            setPosts(postsArr)
        })
        return unsubscribe
    }, []);

    function handleChange(event) {
        const { value } = event.target
        setContent(value)
    }

    function handleClick() {
        if (content.replace(/\s/g, '')) {
            createNewPost()
        }
        setContent('')
    }

    async function createNewPost() {
        const newPost = {
            createdAt: Date.now(),
            updatedAt: Date.now(),
            handle: "Run",
            content: content.replace(/<br\s?\/?>/g, "\n"),
            likes: 0,
            comments: [],
            retweets: 0
        }
        await addDoc(postsCollection, newPost)
    }

    const allPosts = posts.map(post => {
        const date = new Date(post.createdAt)
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: "numeric" };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
        return (
            <div className={styles['posts']} key={post.id}>
                <div className={styles['posts-inner']}>
                    <div className={styles['posts-left']}>
                    <img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Prescription01&hairColor=Red&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Side&eyebrowType=UpDownNatural&mouthType=Vomit&skinColor=Pale' />
                    <p className={styles['posts-more']}>...</p>
                    </div>
                    <div className={styles['posts-main']}>
                        <div className={styles['poster-info']}>
                            <p className={styles['handle']}>{post.handle}</p>
                            <p className={styles['time']}>{formattedDate}</p>
                        </div>
                        <p className={styles['content']}>{post.content}</p>
                        <div className={styles['posts-details']}>
                            <span className={styles['posts-detail']} >
                                <i class="fa-regular fa-comment-dots"></i>
                                {post.likes}
                            </span>
                            <span className={styles['posts-detail']} >
                                <i class="fa-regular fa-comment-dots"></i>
                                {post.comments.length}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <section className={styles['xpress']}>
            <div className={styles['avatar-area']}>
                <img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Prescription01&hairColor=Red&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Side&eyebrowType=UpDownNatural&mouthType=Vomit&skinColor=Pale'
                />
                <h3>Ryyyyyan💎💎</h3>
            </div>
            <div className={styles['typing-area']}>
                <textarea
                    value={content}
                    name='content'
                    placeholder="What's going on today ...? "
                    onChange={handleChange}
                ></textarea>
                <button onClick={handleClick}><span className={styles['x']}>X</span>press</button>
            </div>

            <div className={styles['post-area']}>
                {allPosts}
            </div>
        </section>
    )
}


function RightSideBar() {
    return (
        <section className={styles['right-sidebar']}>
            <div>
                tools
            </div>
        </section>
    )
}

export default function Xpress() {
    return (
        <Layout page='xpress'>
            <Split
                sizes={[20, 60, 20]}
                direction="horizontal"
                className={styles['container']}
            >
                <LeftSideBar />

                <Content />

                <RightSideBar />
            </Split>
        </Layout>
    )
}