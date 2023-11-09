import {type FC,type  PropsWithChildren} from "react";

type HeaderProps = PropsWithChildren<{
    image: string;
    alt: string;
}>;

const Header:FC<HeaderProps> =({image,alt,children}) => {
    return (
        <header>
            <img src={image} alt={alt}/>
            {children}
        </header>
    );
};

export default Header;