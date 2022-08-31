import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, repellendus! Consequuntur doloremque sequi, harum rem ipsa doloribus obcaecati, nesciunt, quasi praesentium expedita nam quas aliquam officia? Sunt ab tenetur cupiditate.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, repellendus! Consequuntur doloremque sequi, harum rem ipsa doloribus obcaecati, nesciunt, quasi praesentium expedita nam quas aliquam officia? Sunt ab tenetur cupiditate.</p>
      <Link href='/ninjas'>
        <a>See Ninja Listing</a>
      </Link>
      <Footer />
    </div>
  )
}
