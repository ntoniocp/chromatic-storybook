import styles from "./Button.module.css";

type ButtonProps = {
  full?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  const { full, ...buttonProps } = props;

  return (
    <button
      {...buttonProps}
      className={styles.btn}
      style={{ width: full ? "100%" : "auto", backgroundColor: 'pink' }}
    />
  );
}
