import styles from "@/styles/Home.module.css"
import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1 className={styles.title}>
      hello next.js!
    </h1>

    <div>
      <h1>Codeitmall</h1>
      <ul>
        <li>
          <Link href="/products/1">첫 번째 상품</Link>
        </li>
        <li>
          <Link href="/products/2">두 번째 상품</Link>
        </li>
        <li>
          <Link href="/products/3">세 번째 상품</Link>
        </li>
      </ul>
    </div>
    </>
    
  );
}
