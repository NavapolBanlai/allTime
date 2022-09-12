import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import router from 'next/router'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className='box'>
      <button type="button" className="btn btn-link" onClick={() => router.push('./login')}>Link</button>

    </div>
  )
}
Home.getHearder = function getHearder() {
  return "Home";
}
export default Home
