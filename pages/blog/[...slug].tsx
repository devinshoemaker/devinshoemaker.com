import hydrate from 'next-mdx-remote/hydrate';
import Head from 'next/head';
import Date from '../../components/Date';
import Layout from '../../components/Layout';
import { getMdxContent } from '../../lib/get-mdx-content';

export async function getStaticPaths() {
  const posts = await getMdxContent('./posts');
  const paths = posts.map(({ slug }) => ({
    params: {
      slug: slug.split('/'),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const posts = await getMdxContent('./posts');
  const postSlug = slug.join('/');
  const [post] = posts.filter((post) => post.slug === postSlug);

  if (!post) {
    console.warn(`No content found for slug ${postSlug}`);
  }

  return {
    props: {
      mdxSource: post.mdx,
      frontMatter: post.data,
    },
  };
}

export default function BlogPost({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource);

  return (
    <Layout>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <article>
        <h1 className="text-6xl text-gray-900 dark:text-gray-100">
          {frontMatter.title}
        </h1>
        <div className="mt-4 text-gray-900 dark:text-gray-100">
          <Date dateString={frontMatter.date} />
        </div>
        {content}
      </article>
    </Layout>
  );
}
