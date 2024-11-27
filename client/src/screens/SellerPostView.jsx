import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import getAllSellerPosts from '../hooks/getAllSellerPosts'

function SellerPostView() {
    const {id} = useParams()
    const [data, setData] = useState(null)
    const sellerAllposts = useSelector((d) => d.seller.sellerAllPosts);
    const array = [1, 2, 3, 4, 5];
    const [rat, setRat] = useState(0)

    getAllSellerPosts()

    useEffect(() => {
        
        const post = sellerAllposts.find((p) => p._id === id);
        const ratings = post.comments.reduce((acc, v) => acc + v.rating, 0);
        setRat(Math.floor(ratings / post.comments.length))
        setData(post)
        console.log(post)
    }, [])
 
  return (
    <div className='w-full min-h-full text-white'>
        {
            data ? <div className='pt-[80px]'>
                <div className='w-full flex items-start justify-between'>
                    <div>
                        <img className='w-[300px] h-[300px] object-cover rounded-xl' src={data.avatar} alt="" />
                        <div className='mt-3'>
                            <p>Full Name: {data.fullname}</p>
                            <p>Age: {data.age}</p>
                            <p>RPH: {data.rph}</p>
                            <p>Contact: {data.pnumber}</p>
                            <p>Buyers: {data.buyers.length}</p>
                            <div className=' flex items-center gap-2'>Ratings: {rat} {<div
                                        style={{
                                          clipPath:
                                            "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                                        }}
                                        // onMouseEnter={() => setnum(i + 1)}
                                        className={`w-[18px] 
                                            bg-yellow-300
                                       h-[18px]  rounded-md`}
                                      ></div>}</div>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-[22px] font-medium mb-4'>
                            List of buyers
                        </h2>

                        <div className='flex  flex-col gap-3 h-[400px] overflow-y-auto '>
                            {
                                data.buyers.map((e,i) => {
                                    return <div className='flex items-center gap-3'>
                                        <img className='w-[40px] h-[40px] object-cover rounded-full' src={e.avatar} alt="" />
                                        <p className='text-[18px] font-medium capitalize'>{e.fullname}</p>
                                    </div>

                                })
                            }
                        </div>
                    </div>
                </div>

                <div>
                <h2 className="text-[24px] bg-clip-text text-transparent inline-block bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] font-semibold mt-10">Comments</h2>

                    {
                        data.comments.length > 0 ? <div className="mt-5">
                        {data.comments.map((e, i) => {
                          return (
                            <div key={i} className="py-3 border-b border-white/[0.5]">
                              
                                <div className="flex items-center gap-3">
                                  <img
                                    className="w-[32px] h-[32px] object-cover rounded-full"
                                    src={e.commenter.avatar}
                                    alt=""
                                  />
                                  <p className="capitalize">{e.commenter.fullname}</p>
                                </div>
                                
                            
        
                              <div className="flex pl-[44px] items-start justify-between gap-[200px] mt-2">
                                <p className="text-[18px]">{e.comment}</p>
                                <div className="flex text-[18px] items-center gap-3">
                                    <p>Rating: </p>
                                    <div className="flex items-center gap-2">
                                  {array.map((o, i) => {
                                    return (
                                      <div
                                        style={{
                                          clipPath:
                                            "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                                        }}
                                        // onMouseEnter={() => setnum(i + 1)}
                                        className={`w-[18px] ${
                                          i + 1 <= e.rating
                                            ? "bg-yellow-300"
                                            : "bg-white/[0.5]"
                                        } h-[18px]  rounded-md`}
                                      ></div>
                                    );
                                  })}
                                </div>
                                
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                        : 
                        <div className='mt-4 text-red-500'>kono comments nai</div>
                    }
                </div>
            </div>
            : 'nai'
        }
    </div>
  )
}

export default SellerPostView