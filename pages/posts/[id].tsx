import Layout from "../../components/layout";
import { getAllIds, getPostContent } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import { GetStaticProps, GetStaticPaths } from "next";
import React from "react";
import styles from '../../styles/layout.module.css';
import { Container, Row, Col } from "react-bootstrap";

export default function Post({postData}: {
    postData: {
        title: string,
        date: string,
        htmlContent: string
    }
}) 
{
    return (
    <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>

        <Container>
            <Row>
            <article>
                <h1 className={styles.title}>{postData.title}</h1>
                <div className={styles.text}>
                    <Date dateString={postData.date}/>
                </div>
                <div className={styles.text} dangerouslySetInnerHTML={{ __html: postData.htmlContent }}/>
            </article>
            </Row>
        </Container>
    </Layout>)
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllIds();
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostContent(params?.id as string);

    return {
        props: {
            postData
        }
    }
}