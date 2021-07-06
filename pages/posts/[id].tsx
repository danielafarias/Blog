import Layout from "../../components/layout";
import { getAllIds, getPostContent } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import { GetStaticProps, GetStaticPaths } from "next";
import React from "react";

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
        <article>
            <h1>{postData.title}</h1>
            <div>
                <Date dateString={postData.date}/>
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.htmlContent }}/>
        </article>
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
    const postData = await getPostContent(params.id as string);

    return {
        props: {
            postData
        }
    }
}