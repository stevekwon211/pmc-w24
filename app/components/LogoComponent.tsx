"use client";

import { useCallback } from "react";
import styles from "../page.module.css";

export default function LogoComponent() {
    const handleLogoClick = useCallback(() => {
        window.open("https://disquiet.io/product-marketplace?customLeaderBoardName=pmc-s24", "_blank");
        window.open("https://disquiet.io/pmc-s24", "_blank");
    }, []);

    return (
        <div className={styles.disquietLogoDark2} onClick={handleLogoClick} style={{ cursor: "pointer" }}>
            <img className={styles.clipPathGroup} alt="" src="blink-aster.gif" />
        </div>
    );
}
