import { DetailedHTMLProps, ParamHTMLAttributes, ReactNode } from 'react';

export interface LayoutProps extends 
DetailedHTMLProps<ParamHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode
}