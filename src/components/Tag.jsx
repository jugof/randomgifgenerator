import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Tag = () => {

  const [tag, setTag] = useState('');

  const {gif, loading, fetchData} = useGif(tag);
  
  return (
    <div className='w-1/2 bg-pink-500 rounded-lg border
     border-blue-500 mt-[15px] gap-y-5 flex flex-col items-center '>
      <h1 className='mt-[15px] text-xl underline uppercase font-bold '>
        Random {tag} GIF
      </h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
      }

      <input type='text'
       className='w-10/12 py-2 rounded-lg text-xl text-center'
       onChange={ (event) => setTag(event.target.value)}
       value={tag}
      />

      <button className=' mb-6 mt-[20px] w-10/12 bg-yellow-100 text-lg py-2 rounded-lg '
        onClick={() => fetchData()} >
        Generate
      </button>
    </div>
  )
}

export default Tag