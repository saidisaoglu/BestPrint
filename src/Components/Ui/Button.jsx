import styles from "../Ui/Button.module.scss";

export default function Button({ children, variant, onClick }) {
  const getButtonVariant = () => {
    switch (variant) {
      case "lookThemAll":
        return styles.lookThemAll;
      case "askEva":
        return styles.askEva;
      case "promts":
        return styles.promts;
      case "close":
        return styles.close;
        case "notificationClose":
        return styles.notificationClose;
        case "notificationOkay":
        return styles.notificationOkay;
      
    }
  };

  const classes = [getButtonVariant(), styles.Button].filter(Boolean).join(" ");
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}