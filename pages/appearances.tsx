import Head from 'next/head';
import Layout from '../src/components/Layout';
import styles from '../src/styles/video.module.css';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <h1 className="mb-6">Appearances</h1>

        <section>
          <h2>
            Nx Conf 2022 - Devin Shoemaker - Nx, Ionic, Appflow: Navigating the
            Wild West of Hybrid Apps
          </h2>
          <span className="text-gray-900 dark:text-gray-100">
            October 17th, 2022
          </span>
          <p>
            These days there are a lot of ways to build mobile apps. But what if
            you want to share your types across the frontend and backend, or
            share components and logic across your mobile and web app, and maybe
            an admin panel? At this point, your options get pretty limited, and
            things only get more complicated once you start thinking about how
            to automate building and deploying your native apps to the app
            store. In this talk, we’ll explore how to develop Ionic applications
            in an Nx workspace and how to configure Appflow for automated app
            store deployments.
          </p>
          <div className={styles.videoWrapper}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/3Sbkekg7iWY?si=k9fOBDZ87PVjLfgk"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <hr className="mt-16 mb-16 border-gray-900 dark:border-gray-100 w-2/3 mx-auto" />

        <section>
          <h2>Nx CLI All The Things - Devin Shoemaker - Nx Conf 2021</h2>
          <span className="text-gray-900 dark:text-gray-100">
            September 15th, 2021
          </span>
          <p>
            The Nx CLI is an amazing tool that abstracts away the different
            technologies your app is using under the hood. No need to remember
            the commands and flags to run e2e tests, you just run `nx e2e` and
            let the CLI do the rest. But what if your team wants to use a tool
            that isn’t directly supported, and has no community plugin
            available, like TestCafe? You could run the commands manually, but
            this is less convenient and intuitive than `nx e2e`. The
            `@nrwl/workspace:run-commands` executor is an underrated tool that
            can be used to make any tool, technology, or framework feel like a
            first-class citizen in the Nx CLI. I will break down how this
            executor can be used to add a custom command to the Nx CLI or
            override an existing one, with TestCafe as an example.
          </p>
          <div className={styles.videoWrapper}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/EJL65uCFQ5E?si=LbjTS2NLoh7C3Oub"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <hr className="mt-16 mb-16 border-gray-900 dark:border-gray-100 w-2/3 mx-auto" />

        <section>
          <h2>
            Add mobile capabilities to Nx Workspace using Nxtend - BLS026 SHOW &
            TELL WITH DEVIN SHOEMAKER
          </h2>
          <span className="text-gray-900 dark:text-gray-100">
            February 8th, 2021
          </span>
          <p>
            Beeman invites me onto his show to talk about the suite of Nxtend
            plugins. We demo creating a brand Ionic application in an Nx
            workspace that can compile to a native iOS application.
          </p>
          <div className={styles.videoWrapper}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/zzPBif1jLaw"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <hr className="mt-16 mb-16 border-gray-900 dark:border-gray-100 w-2/3 mx-auto" />

        <section className="mt-12">
          <h2>Nx Office Hours: Nx Plugin Development for React</h2>
          <span className="text-gray-900 dark:text-gray-100">
            January 25th, 2021
          </span>
          <p>
            On this episode of Nx Office Hours, I chat with Brandon Roberts
            about my experience developing multiple plugins for Nx.
          </p>
          <div className={styles.videoWrapper}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/xQitTnLjEds"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <hr className="mt-16 mb-16 border-gray-900 dark:border-gray-100 w-2/3 mx-auto" />

        <section className="mt-12">
          <h2>
            Real Talk JavaScript 106: Extensibility for Angular, React, and Vue
            with NX
          </h2>
          <span className="text-gray-900 dark:text-gray-100">
            October 22nd, 2020
          </span>
          <p>
            {`Dan Wahlin, Craig Shoemaker, John Papa and I chat about Nx. We talk
            about what Nx is, who it's for, and how Nx plugins can extend the
            functionality of your monorepo workspace.`}
          </p>
          <iframe
            height="200px"
            width="100%"
            frameBorder="no"
            scrolling="no"
            seamless
            src="https://player.simplecast.com/e3860bea-614f-4e61-acba-e4c1f0d60a75?dark=true"
          ></iframe>
        </section>

        <hr className="mt-16 mb-16 border-gray-900 dark:border-gray-100 w-2/3 mx-auto" />

        <section className="mt-12">
          <h2>Angular Unfiltered with Brandon Roberts</h2>
          <span className="text-gray-900 dark:text-gray-100">
            June 12th, 2020
          </span>
          <p>
            On Angular Unfiltered with Brandon Roberts, we chat about React,
            Angular, and my experience with developing plugins for Nx.
          </p>
          <div className={styles.videoWrapper}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/itCw_Esr12Q"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </section>
    </Layout>
  );
}
