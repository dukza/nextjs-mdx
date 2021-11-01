import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import Plus from '../src/icon/svg/plus.svg';

// component
import Button from '../src/components/Button/Button'

export default function Home() {
  return (
    <div>
     {/* <img src={Plus.src} /> */}
     <Button label='자세히보기'/>
    </div>
  )
}
