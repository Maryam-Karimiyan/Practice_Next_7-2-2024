import Image from "next/image";
import laserImg from "../../public/lazar.png"
import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <main className={styles.main}>
     <Link href="/about">Go To About Page</Link>
     <Image src={laserImg} alt="laser" width={300} height={300}/>
    </main>
  );
}
