import Style from "./header.module.scss"
import Link from "next/link";

export default function Header() {
  return (
    <header className={Style.postHeader}>
      <Link href="/">
        <a>
          <img src="/logo_def.svg" alt="logo" />
        </a>
      </Link>
    </header>
  );
}
