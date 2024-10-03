import styles from "./page.module.css";
import LogoComponent from "./components/LogoComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "PMC W24",
    description: "4주 동안 프로덕트 만들고 런칭하는 레이스",
    icons: {
        icon: "/blink aster.gif", // favicon 설정
    },
};

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={`background ${styles.heightAdjust}`}>
                <div className={styles.backgroundWrapper}>
                    <div className={styles.content}>
                        <div className={styles.headerContainer}>
                            <div className={styles.headerFrame}>
                                <LogoComponent />
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
                            <div className={styles.showContainer}>
                                <div className={styles.marquee}>
                                    <div className={styles.marqueeContent}>
                                        <span>4주 동안 퀘스 깨면서 프로덕트 만들고 런칭하는 레이스</span>
                                        <span>최소 3만명에게 프로덕트 홍보 지원</span>
                                        <span>유저에게 사랑받는 제품을 만들고 싶나요?</span>
                                    </div>
                                    <div className={styles.marqueeContent} aria-hidden="true">
                                        <span>4주 동안 퀘스트 깨면서 프로덕트 만들고 런칭하는 레이스</span>
                                        <span>최소 3만명에게 프로덕트 홍보 지원</span>
                                        <span>유저에게 사랑받는 제품을 만들고 싶나요?</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.frameParent}>
                            <div className={styles.frameGroup}>
                                <div className={`${styles.frameChild} ${styles.story}`}>
                                    <span>스토리</span>
                                </div>
                                <div className={`${styles.frameChild} ${styles.intro}`}>
                                    <span>PMC W24 소개</span>
                                </div>
                                <div className={`${styles.frameChild} ${styles.timeline}`}>
                                    <span>타임라인</span>
                                </div>
                                <div className={`${styles.frameChild} ${styles.howToJoin}`}>
                                    <span>참가 방법</span>
                                </div>
                                <div className={`${styles.frameChild} ${styles.faq}`}>
                                    <span>FAQ</span>
                                </div>
                            </div>
                            <div className={styles.frameContainer}>
                                <div className={styles.frameChild2} />
                            </div>
                        </div>
                        <div className={styles.footer}>
                            <span className={styles.footerText}>Maker House</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
