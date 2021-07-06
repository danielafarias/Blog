import { GetStaticProps } from 'next';
import Head from 'next/head';
import Date from '../components/date';
import Layout, {blogTitle} from '../components/layout';
import { getPostsbyDate } from '../lib/posts';
import Link from 'next/link';

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

      <section>
        <img src="../images/daniAvatar.png"/>
        <p>Bem-vinda(o)! Pode me chamar de Dani, tenho 20 aninhos, estudante de Desenvolvimento Web. 🧙🏻‍♀️</p>
        <br/>
        <p>Gosto de coisas visuais e bonitas, não atoa escolhi o front-end;</p>
        <p>Apaixonada por programação, tecnologia, arte, design, 
          jogos (RPG preferencialmente), doces, culturas do Leste Asiático e animais;</p>
        <p>Cor favorita: Preto;</p>
        <p>Doces favoritos: Mochi e Chocolate;</p>
        <p>Signo: Libra;</p>
        <p>MBTI: INFP</p>
        <p>Série Favorita: Sons of Anarchy</p>
        <p>Filmes Favoritos: Portrait of a Lady on Fire e Todos da franquia Chucky</p>
        <p>Outras coisinhas favoritas: Novels Chinesas e Tailandesas, Webtoons Coreanos e Chineses, 
          K-Pop, J-pop, C-pop, Podcasts, Realities Shows asiáticos, Terror, True Crime, Suspense, 
          Kuroshitsuji e Drama Total;</p>
        <p>Aqui mulheres têm privilégios.</p>
      </section>

      

      <section>
        <h2>Blog</h2>
        <ul>
          {
            postsData.map( ({ id, date, title }) => (
              <li key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
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