import { ChangeEventHandler, useState } from "react";
import { FieldProps } from "../types";
import dataSchema from "../schema";
import { ValidationError } from "yup";

export default function PasswordField({ errors }: FieldProps) {
  const [strength, setStrength] = useState<"easy" | "medium" | "hard" | null>(
    null,
  );

  const onChange: ChangeEventHandler = async ({ target }) => {
    if (
      target instanceof HTMLInputElement &&
      target.className === "password-input"
    ) {
      try {
        await dataSchema.validateAt(
          "password",
          { password: target.value },
          {
            abortEarly: false,
          },
        );
      } catch (error) {
        const errorNumber = (error as ValidationError).errors.length;
        switch (errorNumber) {
          case 4:
          case 3:
            setStrength("easy");
            break;
          case 2:
            setStrength("medium");
            break;
          case 1:
            setStrength("hard");
            break;
          default:
            setStrength(null);
        }
      }
    }
  };

  return (
    <div className="field password-fields">
      <div className="password-field">
        <label className="password-label" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          className="password-input"
          type="password"
          name="password"
          onChange={onChange}
        />
        {strength ? (
          <div className={"password-strength" + " " + strength}>{strength}</div>
        ) : null}
        {errors && errors.password ? (
          <div className="error">{errors.password}</div>
        ) : null}
      </div>
      <div className="confirm-password-field">
        <label className="confirm-password-label" htmlFor="confirm-password">
          Confirm password
        </label>
        <input
          id="confirm-password"
          className="confirm-password-input"
          type="password"
          name="confirm-password"
        />
        {errors && errors.confirmPassword ? (
          <div className="error">{errors.confirmPassword}</div>
        ) : null}
      </div>
    </div>
  );
}
