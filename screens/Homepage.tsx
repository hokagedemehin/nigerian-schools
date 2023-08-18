'use client'
import { useAppSelector } from '@/store/store'
import React from 'react'

const HomepageScreen = () => {
  const info = useAppSelector((state) => state.sideNav)
  console.log('info :>> ', info);
  return (
    <div>
      <h1>Homepage</h1>
    </div>
  )
}

export default HomepageScreen