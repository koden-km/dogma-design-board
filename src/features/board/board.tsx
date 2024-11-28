"use client";

interface Props {
  board: string;
}

export default function Board(props: Props) {
  const board = props.board;

  return (
    <div>
      {/* TODO: placeholder... show the name */}
      <div>Board: [{board}]</div>

      {/* TODO: re-add these components */}
      <div>Model</div>
      <div>Title</div>
      <div>Toolbar</div>
    </div>
  );
}
