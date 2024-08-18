import { SubmitHandler, useForm } from "react-hook-form";
import SubmitButton from "../Form/SubmitButton";
import { yupResolver } from "@hookform/resolvers/yup";
import dataSchema from "../Form/schema";
import ReactHookNameField from "./Name";
import { UpdatedData } from "../Form/types";
import { object, string } from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateData } from "../Data/slice";
import { Path } from "../../views/router";

// type Inputs = {
//   example: string;
//   exampleRequired: string;
// };
const testSchema = object({
  name: string()
    .matches(/^[A-Z].*/, "First letter must be uppercase")
    .required("Name is required"),
});

export default function ReactHookCustomForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(testSchema) });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<UpdatedData> = (data) => {
    console.log(data);
    dispatch(updateData(data));
    navigate(Path.Root);
  };

  //   console.log("Watch", watch("example"), watch("exampleRequired")); // watch input value by passing the name of it

  //   return (
  //     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
  //     <form onSubmit={handleSubmit(onSubmit)}>
  //       {/* register your input into the hook by invoking the "register" function */}
  //       <input defaultValue="test" {...register("example")} />

  //       {/* include validation with required or other standard HTML validation rules */}
  //       <input {...register("exampleRequired", { required: true })} />
  //       {/* errors will return when field validation fails  */}
  //       {errors.exampleRequired && <span>This field is required</span>}

  //       <input type="submit" />
  //     </form>
  //   );
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <ReactHookNameField registerReturn={register("name")} errors={errors} />
      {/* <AgeField errors={errors} /> */}
      {/* <EmailField errors={errors} /> */}
      {/* <PasswordField errors={errors} /> */}
      {/* <GenderField errors={errors} /> */}
      {/* <AvatarField errors={errors} /> */}
      {/* <CountryField errors={errors} /> */}
      {/* <TermsAndConditionsField errors={errors} /> */}
      <SubmitButton />
    </form>
  );
}
