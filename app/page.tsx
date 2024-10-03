import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={`background ${styles.heightAdjust}`}>
                <div className={styles.backgroundWrapper}>
                    <div className={styles.content}>
                        <div className={styles.headerContainer}>
                            <div className={styles.disquietLogoDark2}>
                                <img className={styles.clipPathGroup} alt="" src="blink aster.gif" />
                            </div>
                            <div className={styles.productMakersClubContainer}>
                                <span className={styles.productMakersClubText}>
                                    <b>{`Product `}</b>
                                    <span className={styles.makersClubW24}>Makers Club W24</span>
                                </span>
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
                        <div className={styles.frameParent}>
                            <div className={styles.frameGroup}>
                                <div className={styles.frameChild} />
                                <div className={styles.frameChild} />
                                <div className={styles.frameChild} />
                                <div className={styles.frameChild} />
                                <div className={styles.frameChild} />
                            </div>
                            <div className={styles.frameContainer}>
                                <div className={styles.frameChild2} />
                            </div>
                        </div>
                        <div className={styles.footer}>
                            <p>© 2024 Product Makers Club</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
