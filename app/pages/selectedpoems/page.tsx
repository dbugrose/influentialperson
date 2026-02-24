import PoemImage from '@/app/components/PoemImage'
import PoemMain from '@/app/components/PoemMain'

import React from 'react'

const SelectedPoems = () => {
  return (
 <div className="flex min-h-screen items-center justify-center font-sans text-black mb-4">
      <main className="max-w-175">
        <PoemImage/>
        <PoemMain/>
    </main>
    </div>  )
}

export default SelectedPoems