import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');
// /home/daniela/blue/blog/posts

export function getPostsbyDate() {
    {/* ["postpipipopo.md", "postpopopipi.md"] -> posts como index de uma array */}
    const filesName = fs.readdirSync(postsDirectory);
    {/* Vetor de objetos */}
    const postsData = filesName.map( eachFile => {
                                        {/* RegExp() */}
            const id = eachFile.replace(/\.md$/, '')

            const filesPath = path.join(postsDirectory, eachFile);
            {/* /home/daniela/blue/blog/posts/entendendo-nextjs.md */}

            const fileContent = fs.readFileSync(filesPath, 'utf-8');

            const matterResult = matter(fileContent);

            return {
                id,
                ...(matterResult.data as { date: string; title: string})
            }
        }
    )
                    {/* objeto1 e objeto2 */}
    return postsData.sort( (a, b) => {
        if(a.date < b.date) {
            return 1
        } else {
            return -1
        }
    } )
}

export function getAllIds() {
    const filesName = fs.readdirSync(postsDirectory);

    return filesName.map(eachFile => {
        return {
            params: {
                id: eachFile.replace(/\.md$/, '')
            }
        }
    })
}

export async function getPostContent(id: string) {
    const filesPath = path.join(postsDirectory, `${id}.md`);
    const fileContent = fs.readFileSync(filesPath, 'utf-8');

    const matterResult = matter(fileContent);

    {/* remark convert md to html */}
    const processedContent = await remark() 
    .use(html)
    .process(matterResult.content)

    const htmlContent = processedContent.toString()

    return {
        id,
        htmlContent,
        ...(matterResult.data as { date: string; title: string})
    }
}