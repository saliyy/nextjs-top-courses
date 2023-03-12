import ParagraphProps from "./Paragraph.props";
import styles from './Paragraph.module.css';

export const Paragraph = ({ size='small', children, className, ...props }: ParagraphProps): JSX.Element => {
    return (
        <>
          <p className={`${className} ${styles[size]}`} {...props}>
            { children }
          </p>
        </>
    );
};