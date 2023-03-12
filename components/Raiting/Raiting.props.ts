import { DetailedHTMLProps, ParamHTMLAttributes } from 'react';

export default interface RaitingProps extends 
    DetailedHTMLProps<ParamHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditable?: boolean,
    raiting: number;
    setRaiting?: (raiting: number) => void;    
}