import { DetailedHTMLProps, ParamHTMLAttributes, ReactNode } from 'react';

export default interface ParagraphProps extends 
    DetailedHTMLProps<ParamHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
        size?: 'small' | 'medium' | 'large',
        children: ReactNode
    }