import Head from 'next/head';
import Date from '../components/date';
import Layout, {blogTitle} from '../components/layout';

export default function Home() {
  return (
    <Layout>
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

      <Date dateString='2021-07-04'></Date>
    </Layout>

        
  )
}
