import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>tamagoez Website</title>
        <meta name="description" content="An official website for tamagoez" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div>
        <div className="hero min-h-screen">
          <div class="hero-overlay bg-opacity-60" />
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold">tamagoez Website</h1>
              <p class="mb-5">Portfolio(application, illust, movies), blog, contact</p>
              <button class="btn glass">Take a look</button>
            </div>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
