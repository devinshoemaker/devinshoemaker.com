import Head from 'next/head';
import Link from 'next/link';
import Date from '../../components/Date';
import Layout from '../../components/Layout';
import { BLOG_CONTENT_PATH } from '../../lib/constants';
import { getMdxContent } from '../../lib/get-mdx-content';

export async function getStaticProps() {
  const posts = await getMdxContent(BLOG_CONTENT_PATH);
  const allMdx = posts
    .sort((a: any, b: any) => {
      if (a.data.date < b.data.date) {
        return 1;
      } else {
        return -1;
      }
    })
    .map((post) => ({
      slug: post.slug,
      mdx: post.mdx,
      ...post.data,
    }));

  return {
    props: {
      allMdx,
    },
  };
}

export default function Blog({ allMdx }) {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      {allMdx.map((postData: any, index: number) => {
        return (
          <article key={postData.slug}>
            <Link href={`/blog/${postData.slug}`}>
              <a className="text-6xl text-gray-900 dark:text-gray-100 underline">
                {postData.title}
              </a>
            </Link>

            <div className="mt-2 text-gray-900 dark:text-gray-100">
              <Date dateString={postData.date} />
            </div>

            <h2 className="mt-6">{postData.description}</h2>

            {index < allMdx.length - 1 && (
              <hr className="mt-16 mb-16 border-gray-900 dark:border-gray-100 w-2/3 mx-auto" />
            )}
          </article>
        );
      })}
    </Layout>
  );
}
