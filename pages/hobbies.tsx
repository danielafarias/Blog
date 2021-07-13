import Layout from "../components/layout";
import styles from '../styles/hobbies.module.css';
import Head from 'next/head';

export default function Hobbies() {
    return (
        <Layout>

            <Head>
                <title>
                    Hobbies
                </title>
            </Head>
            
            <h2 className={styles.title}>Hobbies 🧹</h2>
            <article>
                <div className={styles.container}>
                    <h3>O que eu gosto de fazer</h3>
                    <img className={styles.gif} src="/images/hobbies.gif" alt="hobbies gif" width="40%"/>
                    <div className={styles.text}>
                        <p>📌 Ouvir Música;</p>
                        <p>📌 Ouvir Podcast;</p>
                        <p>📌 Twitter;</p>
                        <p>📌 Ler Webtoon, Mangá e Manhua;</p>
                        <p>📌 Ler novels chinesas;</p>
                        <p>📌 Assistir dramas coreanos, japoneses, chineses, tailandeses e taiwaneses;</p>
                        <p>📌 Editar Imagens;</p>
                        <p>📌 Jogar;</p>
                        <p>📌 Ver vídeos de animais fofinhos;</p>
                        <p>📌 Descobrir restaurantes novos;</p>
                        <p>📌 Escrever e Desenhar;</p>
                        <p>📌 Ler, não apenas livros;</p>
                        <p>📌 Estudar sobre idade do Bronze e Ferro Nórdica e era Viking;</p>
                        <p>📌 Aprender sobre culturas do leste asiático;</p>
                        <p>📌 Estudar sobre mulheres na história e feminismo (raíz).</p>
                    </div>
                </div>
            </article>
            
        </Layout>
    );
}