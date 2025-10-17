// import Image from 'next/image';
"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./scr-main.module.css";
import { SubScrMainMenu } from "./subscreens/subscr-main-menu";

export function ScrMain() {
  const router = useRouter();
  return(
    <div className={styles.mainLayout}>
      <div className={styles.topBar}>
        <Image src="/admin.svg" width={30} height={30} alt="Administrator" />
        <div className={styles.title}>Checklists</div>
        <Image src="/search.svg" width={30} height={30} alt="Search" />
      </div>
      <div className={styles.contentArea}>
        <SubScrMainMenu/>
      </div>
      <div className={styles.bottomBar}>
        <div className={styles.bottomBarElement}>
          <Image src="/home.svg" width={30} height={30} alt="Home" />
        </div>
        <div className={styles.bottomBarElement}>
          <Image src="/plus.svg" width={30} height={30} alt="Add" />
        </div>
        <div className={styles.bottomBarElement}
             onClick={() => router.push("/notifications")}>
          <Image src="/bell.svg" width={30} height={30} alt="Notifications" />
        </div>
      </div>
    </div>
  );
}
