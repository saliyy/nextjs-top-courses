import { ParamHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';


export interface TagProps extends 
    DetailedHTMLProps<ParamHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        appereance?: 'primary' | 'ghost' | 'success' | 'warning' | 'danger',
        size?: 'small' | 'medium' | 'large',
        href?: string,
        children: ReactNode;
    }