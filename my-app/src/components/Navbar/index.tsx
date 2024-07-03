import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0'>
      <Link href='/'>Logo</Link>
    </div>
  );
}

export default Navbar