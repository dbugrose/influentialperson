import AccomplishmentsImage from '@/app/components/AccomplishmentsImage'
import AccomplishmentsMain from '@/app/components/AccomplishmentsMain'
import React from 'react'

const Accomplishments = () => {
  return (
 <div className="flex min-h-screen items-center justify-center font-sans text-black mb-4">
      <main className="max-w-175">
        <AccomplishmentsImage/>
        <h1 className="text-center text-3xl mb-4">Accomplishments</h1>
    <AccomplishmentsMain/>
    </main>
    </div>  )
}

export default Accomplishments