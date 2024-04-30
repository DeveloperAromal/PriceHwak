import Link from 'next/link'

type ButtonProps = {
    title: string;
    href:string;
};


const Button = ({title,href}:ButtonProps) => {
  return (

    <button className='py-3 px-5 rounded-xl text-black bg-white font-bold'>
        <Link href={href}>
                {title}
        </Link>
    </button>
  )
}

export default Button
