import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import dataSchema from "../Form/schema";
import RHNameField from "./Name";
import { UpdatedData } from "../Form/types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateData } from "../Data/slice";
import { Path } from "../../views/router";
import RHAgeField from "./Age";
import RHEmailField from "./Email";
import RHGenderField from "./Gender";
import RHAvatarField from "./Avatar";
import RHCountryField from "./Country";
import RHTermsAndConditionsField from "./T&C";
import SubmitButton from "./SubmitButton";
import RHPasswordField from "./Password";

export default function ReactHookCustomForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(dataSchema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<UpdatedData> = (data) => {
    delete data.terms;
    delete data.confirmPassword;

    const reader = new FileReader();
    if (data.avatar instanceof FileList) reader.readAsDataURL(data.avatar[0]);

    reader.onloadend = async ({ target }) => {
      if (target instanceof FileReader) {
        const { result } = target;
        if (result && typeof result === "string") {
          const avatar = result.split(",")[1] || "";
          data.avatar = avatar;

          delete data.confirmPassword;
          delete data.terms;
          dispatch(updateData(data));
          navigate(Path.Root);
        }
      }
    };
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <RHNameField registerReturn={register("name")} errors={errors} />
      <RHAgeField registerReturn={register("age")} errors={errors} />
      <RHEmailField registerReturn={register("email")} errors={errors} />
      <RHPasswordField
        passwordRegisterReturn={register("password")}
        confirmPasswordRegisterReturn={register("confirmPassword")}
        errors={errors}
      />
      <RHGenderField registerReturn={register("gender")} errors={errors} />
      <RHAvatarField registerReturn={register("avatar")} errors={errors} />
      <RHCountryField
        registerReturn={register("country")}
        watch={watch}
        errors={errors}
      />
      <RHTermsAndConditionsField
        registerReturn={register("terms")}
        errors={errors}
      />
      <SubmitButton />
    </form>
  );
}
