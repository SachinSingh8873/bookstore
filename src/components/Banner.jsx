import React from 'react'
import s2 from "../../public/s2.jpg"
function Banner() {
  return(
  <>
  <div class="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row ">
    <div className=" order-2 md:order-1 w-auto md:w-1/2">
    
     <div className='space-y-5 mt-5 md:mt-20'>
     <h1 className='text-4xl font-bold'>Hii Learner this is {''}
      <span className='text-pink-500'>Sachin</span> from Muzaffarpur</h1> 
      <p className='text-xl'>
      Currently, I am about to finish my final semester at college. In the course of these few years during postgraduation, we have been taught a lot of things. But the practical application of my knowledge will help me know how much have I actually learned. Joining your firm will gauge where I stand. No better opportunity than this can come my way. I can showcase my talent and prove my skills here, while in turn, I can learn how this industry functions in and out.
      </p>
      <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
    </div>
   <button className='btn bg-pink-500 text-black mt-6 mb-5'>Sign Up</button>
  </div>
    <div className={`order-1 md:w-1/2 md:h-1 w-auto mt-12 md:mt-20 md:mx-5 ${"shadow-md bg-base-100"

    }`}>
       <img src={s2} className='mx-auto my-5   "'/>
    </div>
  </div>
  </>
  )
}
export default Banner