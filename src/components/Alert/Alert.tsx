import styles from "./Alert.module.css";
interface AlertProps {
  text: string;
  type: "success" | "error";
  onCloseClick?: () => void;
}

const noOp = () => null;

export function Alert({ text, type, onCloseClick = noOp }: AlertProps) {
  return (
    <div className={`${styles.alert} ${styles[type as string]}`}>
      <p>{text}</p>
      <button
        aria-label="Close success alert"
        className={styles.closeBtn}
        onClick={onCloseClick}
      >
        <span aria-hidden="true">x</span>
      </button>
    </div>
  );
}
