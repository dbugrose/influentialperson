import InfluenceImage from '@/app/components/InfluenceImage'
import InfluenceMain from '@/app/components/InfluenceMain'
import React from 'react'

const Influence = () => {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans text-black mb-4">
      <main className="max-w-175">
        <InfluenceImage/>
        <InfluenceMain/>

      </main>
    </div>
  )
}

export default Influence