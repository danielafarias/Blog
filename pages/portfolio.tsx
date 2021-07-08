import Layout from '../components/layout';
import { Button, ListGroup } from 'react-bootstrap';
import styles from '../styles/portfolio.module.css';

export default function Portfolio() {
    return (
        <Layout>
            <h2 className={styles.title}>Portfolio 📜</h2>
            <div className={styles.portfolio}>
                <div className={styles.portfolioSections}>
                    <h3 className={styles.title}>Github Repositories</h3>
                    <img className={styles.portfolioLogo} src="/images/githubRosa.png" alt='github logo'/>
                    <Button className={styles.btn} href='https://github.com/danielafarias?tab=repositories' target='_blank' variant="info">My Repositories</Button>
                </div>
                <div className={styles.portfolioSections}>
                    <h3 className={styles.title}>APP List</h3>
                    <img className={styles.portfolioLogo} src="/images/react.svg" alt='react logo'/>
                    <ListGroup>
                        <ListGroup.Item className={styles.listItem} action href='https://asianfy.herokuapp.com/' target='_blank'>Asianfy - CRUD</ListGroup.Item>
                        <ListGroup.Item className={styles.listItem} action href='https://the-rick-and-morty-app.herokuapp.com/' target='_blank'>Rick and Morty</ListGroup.Item>
                        <ListGroup.Item className={styles.listItem} action href='https://dragonball-crud.netlify.app/' target='_blank'>Dragon Ball - CRUD</ListGroup.Item>
                        <ListGroup.Item className={styles.listItem} action href='https://calculadora-de-dano.herokuapp.com/' target='_blank'>Calculadora de Dano RPG</ListGroup.Item>
                        <ListGroup.Item className={styles.listItem} action href='https://calculadora-imc-next.netlify.app/' target='_blank'>Calculadora de IMC</ListGroup.Item>
                        <ListGroup.Item className={styles.listItem} action href='https://simple-timer-app.netlify.app/' target='_blank'>Temporizador Simples</ListGroup.Item>
                        <ListGroup.Item className={styles.listItem} action href='https://simple-app-counter.herokuapp.com/' target='_blank'>Contador Simples</ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </Layout>
    );
}