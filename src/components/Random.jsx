import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Random = () => {

 const {loading, gif, fetchData} = useGif('');

  return (
    <div className='w-1/2 bg-green-500 rounded-lg border
     border-blue-500 mt-[15px] gap-y-5 flex flex-col items-center '>
      <h1 className='mt-[15px] text-xl underline uppercase font-bold '>
        A Random Gif
      </h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
      }

      <button className=' mb-6 mt-[20px] w-10/12 bg-yellow-100 text-lg font-bold py-2 rounded-lg '
        onClick={ () => fetchData()} >
        Generate
      </button>
    </div>
  )
}

export default Random