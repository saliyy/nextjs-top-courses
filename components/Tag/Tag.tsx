import { TagProps } from "./Tag.props";
import styles from './Tag.module.css';

export const Tag = ({ size='medium', href, appereance='ghost', children, className, ...props }: TagProps): JSX.Element => {
  return (
        <>
          <div className={`${styles.tag}  ${className} ${styles[size]} ${styles[appereance]}`} {...props}>
            { href ? <a href={href}> { children } </a> : <>{ children }</> }
          </div>
        </>
  );
};