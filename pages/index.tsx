import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="p-12 pt-24">
      <Head>
        <title>Devin Shoemaker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="m-0 text-6xl md:text-8xl text-gray-900 dark:text-gray-100">
        Devin Shoemaker
      </header>

      <main className="lg:max-w-4xl lg:mx-auto">
        <section className="mt-12 md:mt-24 flex flex-col md:flex-row items-center md:items-start">
          <p className="md:mt-4 md:mr-8 text-gray-800 dark:text-gray-200 text-3xl">
            {
              "I'm a software engineer working at Ionic with a passion for web development and open source software."
            }
          </p>
          <div className="mt-6 md:mt-0 md:w-96">
            <Image src="/logo-ionic.svg" height={200} width={200} />
          </div>
        </section>

        <section className="mt-12 md:mt-24 flex flex-col md:flex-row items-center md:items-start">
          <div className="hidden md:block md:w-96">
            <Image src="/logo-nx.svg" height={200} width={200} />
          </div>
          <p className="md:mt-6 md:ml-8 text-gray-800 dark:text-gray-200 text-3xl">
            {
              'I have published several plugins for Nx to add Ionic and Capacitor support, and more.'
            }
          </p>
          <div className="md:hidden mt-6 md:mt-10">
            <Image src="/logo-nx.svg" height={200} width={200} />
          </div>
        </section>
      </main>
    </div>
  );
}
