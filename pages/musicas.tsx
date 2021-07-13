import Layout from '../components/layout';
import styles from '../styles/musica.module.css'

export default function Musica() {
    return (
        <Layout>
            <div className={styles.musica}>
                <h2 className={styles.title}>Músicas 🪄</h2>
                <section className={styles.favs}>
                    <div className={styles.fav}>
                        <h3 className={styles.title}>Música do Momento</h3>
                        <iframe className={styles.playlist} src="https://open.spotify.com/embed/track/2cT06UlzGqsv38XqpRPk0o" width="300" height="380" frameBorder="0" allow="encrypted-media"></iframe>
                    </div>
                    <div className={styles.fav}>
                        <h3 className={styles.title}>Álbum do Momento</h3>
                        <iframe className={styles.playlist} src="https://open.spotify.com/embed/album/7Jw48lPmYuYftfQv5LmAzI" width="300" height="380" frameBorder="0" allow="encrypted-media"></iframe>
                    </div>
                </section>
                <section className={styles.playlists}>
                    <h3 className={styles.title}>Playlists da Vida</h3>
                    <iframe className={styles.playlist} src="https://open.spotify.com/embed/playlist/37i9dQZF1EMgEHRtTa24cT" width="300" height="380" frameBorder="0" allow="encrypted-media"></iframe>
                    <iframe className={styles.playlist} src="https://open.spotify.com/embed/playlist/3NIBAOBcnNMEf13EDN58BP" width="300" height="380" frameBorder="0" allow="encrypted-media"></iframe>
                    <iframe className={styles.playlist} src="https://open.spotify.com/embed/playlist/2gXZda3NfhLSmo7ETa9nkV" width="300" height="380" frameBorder="0" allow="encrypted-media"></iframe>
                    <iframe className={styles.playlist} src="https://open.spotify.com/embed/playlist/1RVyvJIu8PAR7oIiETGnlI" width="300" height="380" frameBorder="0" allow="encrypted-media"></iframe>
                    <iframe className={styles.playlist} src="https://open.spotify.com/embed/playlist/5kYA1HQtNGuyqLlvGU8uEz" width="300" height="380" frameBorder="0" allow="encrypted-media"></iframe>
                    <iframe className={styles.playlist} src="https://open.spotify.com/embed/playlist/2cToSOBvXlXqqbLsi7bEcK" width="300" height="380" frameBorder="0" allow="encrypted-media"></iframe>
                    <iframe className={styles.playlist} src="https://open.spotify.com/embed/playlist/5avTwa6kYj2Ip0JayjoQka" width="300" height="380" frameBorder="0" allow="encrypted-media"></iframe>
                    <iframe className={styles.playlist} src="https://open.spotify.com/embed/playlist/6AEePs1UcYdmb5tyNn5SOT" width="300" height="380" frameBorder="0" allow="encrypted-media"></iframe>
                </section>
            </div>
        </Layout>
    );
}