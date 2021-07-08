import Layout from '../components/layout';
import styles from '../styles/favoritos.module.css';

export default function Favoritos() {
    return (
        <Layout>
            <h2 className={styles.title}>Favoritos 🌙</h2>
            <article>
                <div className={styles.container}>
                    <h3>Minhas coisinhas favoritas</h3>
                    <img className={styles.gif} src="/images/favoritos.gif" alt="favoritos gif" width="40%"/>
                    <div className={styles.text}>
                        <p>💖 <strong>Cores:</strong> Preto (rosa também, obviamente)</p>
                        <p>💖 <strong>Doces:</strong> Mochi e Chocolate</p>
                        <p>💖 <strong>Comidas:</strong> Baozi, Pizza e Gyoza</p>
                        <p>💖 <strong>Jogos:</strong> MMORPGs Coreanos, JRPGs e RPGs em geral</p>
                        
                        <p>💖 <strong>Filmes:</strong> Franquia Chucky e Retrato de uma Jovem em Chamas</p>
                        <p>💖 <strong>Gêneros:</strong> Drama, Terror, True Crime e Thriller</p>
                        <p>💖 <strong>Série:</strong> Sons of Anarchy</p>
                        <p>💖 <strong>Música:</strong> K/J-Pop, Pop, R&B e Metal</p>
                        <p>💖 <strong>Artistas:</strong> EXO, NiziU, Meg Myers, The Weeknd, Britney Spears e JMSN</p>
                        <p>💖 <strong>Webtoon:</strong> Semantic Error (by Angy)</p>
                        <p>💖 <strong>Mangás e Animes:</strong> Kuroshitsuji, Hunter x Hunter, Aoi Hana e Gokusen</p>
                        <p>💖 <strong>Desenho:</strong> Drama Total</p>
                        <p>💖 <strong>Dramas:</strong> Yuri or Another e Addicted Heroin</p>
                        <p>💖 <strong>Novels:</strong> 你丫上瘾了? e รัก นี้ บังเอิญ คือ คุณ </p>
                        <p>💖 <strong>Manhua:</strong> Tamen De Gushi</p>
                        <p>💖 <strong>Podcasts:</strong> Vários de Terror, True Crime, Comédia e Ciência. <a className={styles.link} target='_blank' href='https://open.spotify.com/playlist/2U0m3PAaNRLLohzeFTkIUV?si=50595a12fe99480d'>Playlist Aqui ↗</a>.</p>
                    </div>
                </div>
            </article>
        </Layout>
    );
}