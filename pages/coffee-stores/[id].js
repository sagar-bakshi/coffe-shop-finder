import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import {ArrowLeftIcon, LocationMarkerIcon, StarIcon} from '@heroicons/react/outline'
import { useRouter } from "next/router";
import coffeeStoresData from '../../data/coffee-stores.json';

export function getStaticProps(staticProps){
   const params = staticProps.params;

  return {
    props:{
      coffeeStore : coffeeStoresData.find((store)=>{
        return store.id == params.id;
      })
    }
    
  }
}

export async function getStaticPaths() {
  const paths = coffeeStoresData.map(coffeeStore =>{
    return {
      params : {"id" : coffeeStore.id.toString()}
    }
  })
  return {
    paths,
    fallback: true,
  };
}

export default function CoffeeStore(props) {
  const router = useRouter();

  

  if(router.isFallback){
    return(
      <div>Loading....</div>
    )
  }
  const {name, address, neighbourhood, imgUrl} = props.coffeeStore;

  const handleUpvote = ()=>{
      console.log('handles up vote');
  }

  return (
    <div className='mt-10'>
      <Head>
        <title>{name}</title>
      </Head>
      <div className='flex items-center ml-4'>
        <ArrowLeftIcon className='h-4 mr-1'/>
        <Link href="/">
          <a className='text-xl text-indigo-900 font-bold'> Back to Home</a>
        </Link>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 items-center mt-20'>
        <div className='place-self-end m-5'>
          <h1 className='text-2xl font-bold m-2 text-gray-100'>{name}</h1>
          <Image src={imgUrl} height={360} width={600} className='rounded-xl'/>
        </div>
        <div className='drop-shadow-lg md:w-3/5 bg-white  p-8 m-5 rounded-lg hover:opacity-100
         opacity-90 cursor-pointer'>
            <div className='flex mb-3'>
              <LocationMarkerIcon className='h-7 mr-2 text-indigo-800'/>
              <p className='text-2xl text-indigo-900 font-bold'>{address}</p>
            </div>
            <div className='flex  mb-2'>
              <StarIcon className='h-7 mr-2 text-indigo-800'/>
              <p className='text-indigo-900 text-xl font-bold'>10</p>
            </div>
            <button type="submit" onClick={handleUpvote} className='mt-2 bg-indigo-800 p-2
            hover:bg-indigo-600 text-white font-extrabold rounded-md'>Up Vote!</button>
        </div>
      </div>
    </div>
  );
}
