import Head from 'next/head';
import Image from 'next/image';
import { Navbar, Nav, Button } from 'react-bootstrap';

import styles from '../styles/layout.module.css';

const myName = 'Daniela Farias';

export const blogTitle = 'Daniela Farias | Front-end Developer';

export default function Layout(
    {children, home}:
    {children: React.ReactNode, home?: boolean}
) {
    return (
        <div className={styles.page}>

            <Head>
                <link rel='icon' href='/favicon.ico'/>
                <meta name='Daniela Farias' content='Blog pesssoal com portfólio'/>
                <meta property='og:image'
                content={`https://og-image.vercel.app/${encodeURI(blogTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}/>
                <meta name='og:title' content={blogTitle} />
                <meta name='twitter:card' content='summary large image' />
            </Head>

            {/* HEAD != HEADER -> Cabeça != Cabeçalho */}

            <header>
                {
                    
                        <>
                            <Image 
                                priority
                                src='/images/daniLogo.gif'
                                height={400}
                                width={400}
                                alt={myName}
                            />

                            <Navbar className='justify-content-center' expand="md">

                                <Navbar.Brand id='navbar-brand' href="/">My lovely blog 💖</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">

                                        <Nav.Link id='basic-nav-dropdown' href="/">Home</Nav.Link>
                                        <Nav.Link id='basic-nav-dropdown' href="/portfolio">Portfólio</Nav.Link>
                                        <Nav.Link id='basic-nav-dropdown' href="/hobbies">Hobbies</Nav.Link>
                                        <Nav.Link id='basic-nav-dropdown' href="/favoritos">Favoritos</Nav.Link>
                                        <Nav.Link id='basic-nav-dropdown' href="/contatos">Contatos</Nav.Link>
                                    </Nav>
                                 </Navbar.Collapse>
                            </Navbar>
                        </>
                    
                }
            </header>

            <main className={styles.container}>{children}</main>

            {!home && (
                <div className={styles.container}>
                    <Button className={styles.button} variant='primary' href="/">
                        ❮❮ Retornar para o Início
                    </Button>
                </div>
            )}
        </div>
    )
}