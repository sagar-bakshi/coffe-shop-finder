import Image from "next/image"
import Link from "next/link"


export default function Card(props) {
  return (
        <Link href={props.href}>
             <div className="p-4 bg-gray-100 m-5 justify-center items-center
              rounded-lg hover:bg-gray-200 cursor-pointer flex flex-col">
                <a className="m-auto">
                    <h2 className="text-purple-900 text-2xl font-bold mb-2">{props.name}</h2>
                    <Image
                    className="rounded-md opacity-90"
                    src={props.imgUrl}
                    width={300}
                    height={200} />
                </a>
            </div>
        </Link>
    
  )
}
