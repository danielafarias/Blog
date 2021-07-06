import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar, NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

import styles from '../styles/layout.module.css';

const myName = 'Daniela Farias';

export const blogTitle = 'Daniela Farias | Front-end Developer';

export default function Layout(
    {children, home}:
    {children: React.ReactNode, home: boolean}
) {
    return (
        <div>

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
                                height={500}
                                width={500}
                                alt={myName}
                            />

                            <Navbar expand="md">

                                <Navbar.Brand href="/">My lovely blog 💖</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">

                                        <Nav.Link id='basic-nav-dropdown' href="/">Home</Nav.Link>
                                        <Nav.Link id='basic-nav-dropdown' href="/hobbies">My hobbies</Nav.Link>
                                        <Nav.Link id='basic-nav-dropdown' href="/favorite">Favorite Things</Nav.Link>
                                        <Nav.Link id='basic-nav-dropdown' href="/discoveries">Discoveries</Nav.Link>
                                        <Nav.Link id='basic-nav-dropdown' href="/dev">Music</Nav.Link>
                                        <Nav.Link id='basic-nav-dropdown' href="/contact">Contact me</Nav.Link>
                                    </Nav>
                                 </Navbar.Collapse>
                            </Navbar>
                        </>
                    
                }
            </header>

            <main>{children}</main>

            {!home && (
                <div>
                    <Link href="/">
                        <a>❮❮ Retornar para o Início</a>
                    </Link>
                </div>
            )}
        </div>
    )
}