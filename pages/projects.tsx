import Head from 'next/head';
import Layout from '../src/components/Layout';

function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <h1>Nxtend Nx Plugins</h1>

        <p>
          <a href="https://nx.dev" target="blank">
            Nx
          </a>{' '}
          is one of my favorite tools to use while developing new projects these
          days. It&apos;s a monorepo toolkit with a plugin architecture that
          allows developers to extend the functionality to make generating new
          types of applications or configuring new types of tooling very easy.
        </p>
        <p>
          I have spent a lot of time and effort in building several plugins for
          Nx, mostly for developing Ionic applications. I started this project
          to fill a need that I had, and I&apos;m happy to share my work with
          the public.
        </p>
        <p>Here are some of the some of the plugins that I&apos;ve made:</p>
        <ul>
          <li>Ionic React</li>
          <li>Ionic Angular</li>
          <li>Capacitor</li>
          <li>Firebase</li>
        </ul>
        <p>
          If you would like to check out these plugins, check out the{' '}
          <a href="https://nxtend.dev" target="blank">
            official website
          </a>
          .
        </p>
      </section>
    </Layout>
  );
}

export default Projects;
