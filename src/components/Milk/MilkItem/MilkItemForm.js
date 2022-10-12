import { Input } from "../../UI/Input";
import styles from "./MilkItemForm.module.css";

export const MilkItemForm = (props) => {
  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
    </form>
  );
};
