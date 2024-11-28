import Board from "@/features/board/board";

interface Props {
  params: Promise<{ board: string }>;
}

export default async function BoardPage({ params }: Props) {
  const board = (await params).board;

  return (
    // <div>
    <Board board={board} />
    // </div>
  );
}
