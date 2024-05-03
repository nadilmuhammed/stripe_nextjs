import CommonHeader from '@/components/CommonHeader'
import HeaderTop from '@/components/packageHeader/HeaderTop'
import React from 'react'
import Landing from './landing/Landing'

function PackageDetails() {
  return (
    <>
        <HeaderTop />
        <CommonHeader />
        <div>
            <Landing />
        </div>
    </>
  )
}

export default PackageDetails