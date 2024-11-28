"use client";

import Link from "next/link";
import AddBoard from "../add-board/add-board";

const boards: string[] = ["foo", "bar", "something-else", "bacon-v1"];

export default function ListBoards() {
  return (
    <ul>
      <li>
        <AddBoard />
      </li>
      {boards.map((board) => (
        <li key={board}>
          <Link href={`/${board}`}>{board}</Link>
        </li>
      ))}
    </ul>
  );
}
