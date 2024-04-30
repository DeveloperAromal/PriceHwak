import Link from 'next/link'

type ButtonProps = {
    title: string;
    href:string;
};


const Button = ({title,href}:ButtonProps) => {
  return (

    <Link href={href} className='py-3 px-5 rounded-xl text-black bg-white font-bold'>
        <button>
                {title}
        </button>
    </Link>
  )
}

export default Button
