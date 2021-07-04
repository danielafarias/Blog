import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

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
                {home && (
                    <>
                        <Image 
                            priority
                            src='/images/daniAvatar.jpg'
                            height={144}
                            width={144}
                            alt={myName}
                        />

                        <h1>{myName}</h1>
                    </>
                )}
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