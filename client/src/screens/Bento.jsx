import React from 'react'

function Bento() {
  return (
    <div className='w-full h-full'>
      <div className=' h-[100vh] flex items-center justify-center'>
        <div className='w-[80%] h-[80%] grid grid-cols-4 grid-rows-3 gap-3 '>
            <div className="div bg-red-300 w-full h-full rounded-xl col-span-2"></div>
            <div className="div bg-blue-300 w-full h-full rounded-xl row-span-0"></div>
            <div className="div bg-yellow-300 w-full h-full rounded-xl row-span-0"></div>
            <div className="div bg-cyan-300 w-full h-full rounded-xl row-span-0"></div>
            <div className="div bg-violet-300 w-full h-full rounded-xl row-span-0"></div>
            <div className="div bg-orange-300 w-full h-full rounded-xl col-span-2"></div>
            <div className="div bg-green-300 w-full h-full rounded-xl col-span-2"></div>
            <div className="div bg-pink-300 w-full h-full rounded-xl row-span-0"></div>
            <div className="div bg-purple-300 w-full h-full rounded-xl row-span-0"></div>
        </div>
    </div>

    <div className='w-full min-h-screen'>

      <div className='  flex flex-col gap-4 lg:w-[80vw] lg:h-[80vh]  lg:flex lg:flex-row'>
        
            <div className="one w-full h-fit flex flex-col gap-4 lg:w-[78%] lg:h-full  ">
                <div className='w-full h-fit flex flex-col items-center gap-4 lg:w-full lg:h-[58%] lg:flex-row'>
                    <div className='w-full blur-sm rounded-lg h-[300px] bg-green-300 lg:w-[70%] lg:h-full'></div>
                    <div className='w-full rounded-lg h-fit flex flex-col gap-4 lg:w-[30%] lg:h-full'>
                      <div className='w-full blur-sm rounded-lg h-[300px] bg-orange-400 lg:h-[50%]'></div>
                      <div className='w-full blur-sm rounded-lg h-[300px] bg-orange-400 lg:h-[50%]'></div>
                    </div>
                </div>
                <div className='w-full h-fit flex items-center flex-col gap-4 lg:flex-row lg:w-full lg:h-[42%]'> 
                    <div className='w-full blur-sm rounded-lg h-[300px] bg-red-300 lg:w-[25%] lg:h-full'></div>
                    <div className='w-full blur-sm rounded-lg h-[300px] bg-violet-300 lg:w-[75%] lg:h-full'></div>
                </div>
            </div>


            <div className="two  h-fit  flex flex-col  gap-4 lg:w-[22%] lg:h-full">
                <div className='w-full blur-sm rounded-lg h-[400px] bg-emerald-400 lg:w-full lg:h-[75%]'></div>
                <div className='w-full blur-sm rounded-lg h-[200px] bg-blue-400 lg:w-full lg:h-[25%]'></div>
            </div>
        </div>

      </div>

    
    </div>
  )
}

export default Bento