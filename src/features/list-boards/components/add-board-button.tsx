import { useCallback } from "react";

export default function AddBoardButton() {
  const handleClick = useCallback(() => {
    console.log("TODO: handle add board button click");
  }, []);

  return (
    <button type="button" onClick={handleClick}>
      Add Board...
    </button>
  );
}
