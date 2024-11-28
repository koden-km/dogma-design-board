// import classnames from "classnames";
// import styles from "../Toolbar.module.css";
// import cardStyles from "../../card/Card.module.css";
// import { useSelectTool } from "../hooks.js";
// import { useCurrentTool } from "../../hooks.js";

// export default function ToolButton(props) {
//   const { isCard, tool } = props;
//   const selectTool = useSelectTool(tool);
//   const isCurrentTool = useCurrentTool() === tool;

//   const className = classnames(styles.button, {
//     [styles.currentTool]: isCurrentTool,
//     [cardStyles[tool]]: isCard,
//   });

//   return (
//     <button type="button" className={className} onClick={selectTool}>
//       {tool.toUpperCase()}
//     </button>
//   );
// }

export default function ToolButton() {
  return <button type="button">TODO BUTTON</button>;
}
