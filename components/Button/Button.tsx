import styles from './Button.module.css';
import ButtonProps from './Button.props';
import Vector from './Vector.svg';

export const Button = ({ appearance, arrow, children, className, ...props }: ButtonProps): JSX.Element => {
    return (
        <button className={`${styles.button} ${className} ${styles[appearance]}`} {...props}>
                { children }

                <span className={`${styles.vector} ${styles.down}`}>   
                    <Vector />
                </span>
             
            </button>     
    );
}; 