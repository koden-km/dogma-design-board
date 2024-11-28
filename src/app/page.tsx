import styles from "./page.module.css";
import ListBoards from "@/features/list-boards/list-boards";

export default function Page() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Add or select a board to begin...</h1>
        <ListBoards />
      </main>
    </div>
  );
}
