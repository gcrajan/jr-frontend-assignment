import Link from "next/link";
import Image from 'next/image'
import Logo from '../images/logo.png'
import footerStyle from '../styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={footerStyle.footerDiv}>
      <h1>BUILT FROM SCRATCH BY ME :)</h1>
      <div className={footerStyle.imageFooter}>
            <Link href='/'> <Image src={Logo} alt="logo"/> </Link>
        </div>
    </footer>
  )
}

export default Footer
