import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <main className={styles.main}>
     <Link href="/about">Go To About Page</Link>
     <Image src="/laser.png" alt="laser" width={100} height={100}/>
    </main>
  );
}
