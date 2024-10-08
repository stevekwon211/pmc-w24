import styles from "./page.module.css";
import AnimatedLogo from "./components/AnimatedLogo";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "PMC W24",
    description: "PMC W24",
    icons: {
        icon: [{ url: "/favicon.ico", sizes: "any" }],
    },
};

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.headerContainer}>
                <div className={styles.headerFrame}>
                    <div className={styles.productMakersClubContainer}>
                        <span className={styles.productMakersClubText}>Product Makers Club W24</span>
                    </div>
                    <a
                        href="https://tally.so/r/wvODPX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.notificationButton}
                    >
                        <div className={styles.notificationText}>모집 알림 받기 !!</div>
                    </a>
                </div>
            </div>
            <div>
                <AnimatedLogo />
            </div>
        </main>
    );
}
