import Head from 'next/head';
import Date from '../../components/Date';
import Layout from '../../components/Layout';
import { getSortedPostsData } from '../../lib/posts';
import styles from '../../styles/markdown.module.css';
import Link from 'next/link';

export async function getStaticProps() {
  const sortedPostData = await getSortedPostsData();
  return {
    props: {
      sortedPostData,
    },
  };
}

export default function Blog({ sortedPostData }) {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <h1 className="text-6xl mb-10 text-gray-900 dark:text-gray-100">
        Blog Posts
      </h1>
      {sortedPostData.map((postData) => (
        <article key={postData.id}>
          <Link href={`/blog/${postData.id}`}>
            <a className="text-4xl text-gray-900 dark:text-gray-100 underline">
              {postData.title}
            </a>
          </Link>
          <div className="mt-4 text-gray-900 dark:text-gray-100">
            <Date dateString={postData.date} />
          </div>
          <div
            className={styles.markdown}
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
          <hr className="mt-16 mb-16 border-gray-900 dark:border-gray-100 w-2/3 mx-auto" />
        </article>
      ))}
    </Layout>
  );
}