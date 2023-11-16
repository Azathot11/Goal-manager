import {type FC, ReactNode} from "react";

type HintBoxProps = {
    mode: 'hint';
    children:  ReactNode;
}

type WarningBoxProps = {
    mode: 'warning';
    severity: 'low' | 'medium' | 'high';
    children:  ReactNode;
}

type infoBoxModel = HintBoxProps | WarningBoxProps;

const InfoBox:FC<infoBoxModel> = (props) =>{

    if(props.mode !== 'warning'){
        return (
            <aside className={'infobox infobox-hint'}>
                <p>{props.children}</p>
            </aside>
        )
    }
    const severityClass = props.severity
        ? {
        low: 'warning--low',
        medium: 'warning--medium',
        high: 'warning--high',
    }[props.severity] || 'warning--medium'
        : 'warning--medium';


    return (
        <aside className={`infobox infobox-warning ${severityClass}`}>
            <h2>Warning</h2>
            <p>{props.children}</p>
        </aside>
    );
}

export default InfoBox;