import styles from "./TextField.module.css";

type TextFieldProps = {
  label?: string;
  error?: string;
  helperText?: string;
  full?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function TextField(props: TextFieldProps) {
  const { full, label, error, helperText, ...inputProps } = props;

  return (
    <div
      className={styles.control}
      style={{ display: full ? "block" : "inline-block" }}
    >
      <label>
        {label}
        <input {...inputProps} className={styles.input} />
      </label>
      {helperText && <p className={styles.helper}>{helperText}</p>}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
