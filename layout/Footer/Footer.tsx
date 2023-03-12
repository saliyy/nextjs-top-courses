import { format } from 'date-fns';
import styles from './Footer.module.css';

export const Footer = (): JSX.Element => {
    return (
        <>
        <div className={styles.wrapper}>
            <div>
                Owl top @ 2020 - {format(new Date(), 'yyyy')} Все права защищены
            </div>
            <a href='#' target="_blank">Пользовательское соглашение</a>
            <a href='#' target="_blank">Политика конфидициальности</a>
        </div>
        </>
    );
};  