import Layout from '../components/layout';
import styles from '../styles/contatos.module.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function Contatos() {
    return (
        <Layout>
            <h2 className={styles.title}>Contatos 🪞</h2>
            <Container className={styles.contatos}>

                <Row>

                    <Col xs={12} sm={6} md={3} className={styles.contato}>
                        <h3 className={styles.contatoTitle}>Github</h3>
                        <a href='https://github.com/danielafarias' target='_blank'>
                            <img 
                                className={styles.logo} 
                                src="/images/github.png" 
                                alt='github logo'
                            />
                        </a>
                    </Col>

                    <Col xs={12} sm={6} md={3} className={styles.contato}>
                        <h3 className={styles.contatoTitle}>Linkedin</h3>
                        <a href='https://www.linkedin.com/in/danielacfarias/' target='_blank'>
                            <img 
                                className={styles.logo} 
                                src="/images/linkedin.png" 
                                alt='linkedin logo'
                            />
                        </a>
                    </Col>

                    <Col xs={12} sm={6} md={3} className={styles.contato}>
                        <h3 className={styles.contatoTitle}>Stackoverflow</h3>
                        <a href='https://stackoverflow.com/users/16210712/dani-hexe' target='_blank'>
                            <img 
                                className={styles.logo} 
                                src="/images/stackoverflow.png" 
                                alt='stackoverflow logo'
                            />
                        </a>
                    </Col>

                    <Col xs={12} sm={6} md={3} className={styles.contato}>
                        <h3 className={styles.contatoTitle}>Instagram</h3>
                        <a href='https://www.instagram.com/danic.farias/' target='_blank'>
                            <img 
                                className={styles.logo} 
                                src="/images/instagram.png" 
                                alt='instagram logo'
                            />
                        </a>
                    </Col>

                    <Col xs={12} sm={6} md={3} className={styles.contato}>
                        <h3 className={styles.contatoTitle}>Behance</h3>
                        <a href='https://www.behance.net/fariasdani3d5d' target='_blank'>
                            <img 
                                className={styles.logo} 
                                src="/images/behance.png" 
                                alt='behance logo'
                            />
                        </a>
                    </Col>

                </Row>

            </Container>
            
        </Layout>
    );
}