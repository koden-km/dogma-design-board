"use client";

import { useRef } from "react";
import AddBoardDialog from "./components/add-board-dialog";
import ShowDialogButton from "./components/show-dialog-button";

export default function AddBoard() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  return (
    <>
      <AddBoardDialog dialogRef={dialogRef} />
      <ShowDialogButton dialogRef={dialogRef} />
    </>
  );
}
