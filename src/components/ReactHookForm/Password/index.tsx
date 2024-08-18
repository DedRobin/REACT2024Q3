import { FormEventHandler, useState } from "react";
import { ValidationError } from "yup";
import dataSchema from "../../Form/schema";
import { RHPasswordFieldProps } from "../types";

export default function RHPasswordField({
  passwordRegisterReturn,
  confirmPasswordRegisterReturn,
  errors,
}: RHPasswordFieldProps) {
  const [strength, setStrength] = useState<"easy" | "medium" | "hard" | null>(
    null,
  );

  const onChange: FormEventHandler = async ({ target }) => {
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
    <div className="field password-fields" onChange={onChange}>
      <div className="password-field">
        <label className="password-label" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          className="password-input"
          type="password"
          {...passwordRegisterReturn}
        />
        {strength ? (
          <div className={"password-strength" + " " + strength}>{strength}</div>
        ) : null}
        <div className="error">{errors.password?.message}</div>
      </div>
      <div className="confirm-password-field">
        <label className="confirm-password-label" htmlFor="confirm-password">
          Confirm password
        </label>
        <input
          id="confirm-password"
          className="confirm-password-input"
          type="password"
          {...confirmPasswordRegisterReturn}
        />
        <div className="error">{errors.confirmPassword?.message}</div>
      </div>
    </div>
  );
}
