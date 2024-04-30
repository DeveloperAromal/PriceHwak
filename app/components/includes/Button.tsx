import Link from 'next/link';

type ButtonProps = {
    title: string;
    href: string;
    className?: string; // Making className optional
};

const Button = ({ title, href, className }: ButtonProps) => {
    return (
        <Link href={href}>
            <button className={className ? className : 'py-3 px-8 rounded-xl text-black bg-white font-bold'}>
                {title}
            </button>
        </Link>
    );
};

export default Button;
