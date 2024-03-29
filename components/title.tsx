import Head from 'next/head'

export default function Title({ title }) {
  if (process.browser) {
    document.title = `${title} - tamagoez(KaneranP)`;
  }
  return (
    <>
      <Head>
        <title>{title} - tamagoez(KaneranP)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="pt-2 text-4xl font-bold flex justify-center">{title}</h1>
      <div className="divider" />
    </>
  );
}
