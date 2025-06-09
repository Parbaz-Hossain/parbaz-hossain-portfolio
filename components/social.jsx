import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter,  FaYoutube } from 'react-icons/fa';

const socials = [
    {icon: <FaGithub />, path:"https://github.com/Parbaz-Hossain"},
    {icon: <FaLinkedin />, path:"https://www.linkedin.com/in/parbaz-hossain/"},
    {icon: <FaTwitter />, path:"https://x.com/parbaz_hossain"},
    {icon: <FaYoutube />, path:""},
]

const Social = ({containerStyles, iconStyles}) => {
    return <div className={containerStyles}>
        {socials.map((social, index) => {
            return (
                <Link href={social.path} key={index} className={iconStyles}>
                    {social.icon}
                </Link>
            );
        })}
    </div>
}


export default Social;