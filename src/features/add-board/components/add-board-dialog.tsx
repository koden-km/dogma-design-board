import { ChangeEvent, MutableRefObject, useCallback } from "react";
import styles from "../add-board.module.css";

interface Props {
  dialogRef: MutableRefObject<HTMLDialogElement | null>;
}

export default function AddBoardDialog(props: Props) {
  const { dialogRef } = props;

  const handleCancel = useCallback(() => {
    console.log("TODO: cancel adding new board...");
    dialogRef.current?.close();
  }, [dialogRef]);

  const handleSubmit = useCallback(() => {
    console.log("TODO: handle adding new board!");
    dialogRef.current?.close();
  }, [dialogRef]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    console.log("TODO: handle change: ", e);
  }, []);

  return (
    <dialog className={styles.dialog} ref={dialogRef}>
      <div className={styles.formElement}>
        <h2>Add Board</h2>
      </div>
      <form method="dialog">
        <div className={styles.formElement}>
          <label>
            <div>Title:</div>
            <input type="text" name="title" onChange={handleChange} />
          </label>
        </div>

        <div className={styles.formElement}>
          <label>
            <div>Domain:</div>
            <input type="text" name="domain" onChange={handleChange} />
          </label>
        </div>

        <div className={styles.formElement}>
          <label>
            <div>Description:</div>
            <input type="text" name="description" onChange={handleChange} />
          </label>
        </div>

        <div className={styles.formElement}>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>

          <button type="button" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </form>
    </dialog>
  );
}
