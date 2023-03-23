import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Atlas Community Event 2023 at&nbsp;
          <code className={styles.code}>San Francisco, March 30th</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="/about"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            About <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find out about Atlas and how it began. What is our goal, and who
            founded Atlas.
          </p>
        </a>

        <a
          href="/dashboard"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Dashboard <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Control your account, redeem gifts, download services, basically do
            everything here.
          </p>
        </a>

        <a
          href="/join"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Join <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Create an Atlas account and enjoy the hundreds of benefits you get
            from it.
          </p>
        </a>
      </div>
    </main>
  );
}
