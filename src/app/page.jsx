import { link } from "fs";
import Link from "next/link";
import { blob } from "stream/consumers";
export default function Home() {
  return (<>
    <Link href="/product">Product</Link>
    <div>WelcomeHome</div>
  
  </>
)}
