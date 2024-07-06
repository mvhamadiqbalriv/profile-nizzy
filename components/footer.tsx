import XIcon from '@mui/icons-material/X';
import YoutubeIcon from '@mui/icons-material/Youtube';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

export const Footer = () => {
    const links = [
        {
            href: 'https//twitter.com/muhamadiqbalriv',
            icon: <XIcon className='h-8 w-8' />,
        },
        {
            href: 'https://www.youtube.com/channel/UC2eYFnH61tmytImy1mTYvhA',
            icon: <YoutubeIcon className='h-8 w-8' />,
        },
        {
            href: 'mailto:muhamadiqbalrivaldi03@gmail.com',
            icon: <EmailIcon className='h-8 w-8' />,
        },
        {
            href: 'https://www.instagram.com/muhamadiqbalriv/',
            icon: <InstagramIcon className='h-8 w-8' />,
        }
    ]
    return (
        <div className="text-center pb-8">
            <div className="flex items-center justify-center space-x-4">
                {links.map((link, index) => (
                    <Link key={index} href={link.href} className="text-primary-500 hover:text-primary-600 transition-colors duration-150 ease-in-out">
                            {link.icon}
                    </Link>
                ))}
            </div>
            <p className='text-small text-slate-100/50'>muhamadiqbalrivaldi03@gmail.com</p>
            <p>&copy; Bal. All rights reserved</p>
        </div>
    )
}