import { GetStaticProps } from 'next';
import Head from 'next/head';
import Date from '../components/date';
import Layout, {blogTitle} from '../components/layout';
import { getPostsbyDate } from '../lib/posts';
import Link from 'next/link';
import styles from '../styles/home.module.css';

export default function Home( {postsData}: {
  postsData: {
    date: string;
    title: string;
    id: string;
  }
}) 

{

  return (
    <Layout home>
      <Head>
        <title>
          {blogTitle}
        </title>
      </Head>

      <div className={styles.home}>

        <section className={styles.intro}>
          <h3 className={styles.title}>Bem-vinda(o)!</h3>
          <img className={styles.avatar} src="../images/daniAvatar.png" alt="Avatar da Dani"/>
          <div className={styles.introText}>
            <p>Pode me chamar de Dani. 😊</p>
            <p>Tenho 20 aninhos, e sou estudante de Desenvolvimento Web. 🧙🏻‍♀️</p>
            <p>Gosto de coisas visuais e bonitas, não atoa escolhi o front-end;</p>
            <p>Aqui você irá encontrar sobre assuntos que tenho estudado,</p>
            <p>e também descobrir sobre meus gostos e peculiariedades. 🤭</p>
            <p>Aqui mulheres tem privilégio! ⚢</p>
          </div>
        </section>

        

        <section className={styles.blogTimeline}>
          <h2 className={styles.title}>Blog 🔮</h2>
          <ul>
            {
              postsData.map( ({ id, date, title }) => (
                <li key={id}>
                  <Link  href={`/posts/${id}`}>
                    <a className={styles.link}>{title}</a>
                  </Link>
                  <br />
                  <small>
                    <Date dateString={date}></Date>
                  </small>
                </li>
              ) )
            }
          </ul>
        </section>

      </div>
     
    </Layout>

        
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const postsData = getPostsbyDate();
  return {
    props: {
      postsData
    }
  }
}