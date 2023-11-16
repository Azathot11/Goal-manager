import {type FC, ReactNode} from "react";

interface infoBoxModel {
    mode:'hint' | 'warning';
    message: string;
    children:  ReactNode;
}

const InfoBox:FC<infoBoxModel> = ({children,mode}) =>{

    if(mode = 'warning'){
        return (
            <aside>
                <h2>Warning</h2>
                <p>{children}</p>
            </aside>
        )
    }

    return (
        <aside>
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    );
}

export default InfoBox;