import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { LayoutProps } from "./Layout.props";
import { SideBar } from "./SideBar/SideBar";
import styles from './Layout.module.css';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <>
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <Header />
            </header>
            <aside className={styles.sidebar}>
                <SideBar/>
            </aside>
            <main className={styles.body}>
                { children }
            </main>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
        </>
    );
};  