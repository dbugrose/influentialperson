import AccomplishmentsImage from '@/app/components/AccomplishmentsImage'
import AccomplishmentsMain from '@/app/components/AccomplishmentsMain'
import React from 'react'

const Accomplishments = () => {
  return (
 <div className="flex min-h-screen items-center justify-center font-sans text-black mb-4">
      <main className="max-w-175">
        <AccomplishmentsImage/>
    <AccomplishmentsMain/>
    </main>
    </div>  )
}

export default Accomplishments