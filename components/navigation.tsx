"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path: string = usePathname();

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link href={"/"}>Home</Link> {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href={"/about-us"}>About Us</Link> {path !== "/" ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  );
}
