import { MutableRefObject, useCallback } from "react";

interface Props {
  dialogRef: MutableRefObject<HTMLDialogElement | null>;
}

export default function ShowDialogButton(props: Props) {
  const { dialogRef } = props;

  const handleClick = useCallback(() => {
    dialogRef.current?.showModal();
  }, [dialogRef]);

  return (
    <button type="button" onClick={handleClick}>
      Add Board
    </button>
  );
}
