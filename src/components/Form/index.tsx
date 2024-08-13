export default function Form() {
  return (
    <form className="form">
      <label className="label text-label">
        Name
        <input className="text-input" type="text" name="name" />
      </label>

      <label className="label age-label">
        Age
        <input className="age-input" type="number" name="age" />
      </label>

      <label className="label email-label">
        Email
        <input className="email-input" type="email" name="email" />
      </label>

      <div className="password-wrapper">
        <label className="label password-label">
          Password
          <input className="password-input" type="password" name="password" />
        </label>
        <label className="label confirm-password-label">
          Confirm password
          <input
            className="confirm-password-input"
            type="password"
            name="confirm-password"
          />
        </label>
      </div>

      <label className="label gender-label">
        Gender
        <select className="gender-select">
          <option className="option male-option">Male</option>
          <option className="option female-option">Female</option>
        </select>
      </label>

      <label className="label image-label">
        Avatar
        <input className="image-file" type="file" />
      </label>

      <label className="label country-label">
        Country
        <select className="country-select">
          <option className="country-option">Belarus</option>
          <option className="country-option">Russia</option>
        </select>
      </label>

      <label className="label terms-and-conditions-label">
        accept Terms and Conditions
        <input className="terms-and-conditions-checkbox" type="checkbox" />
      </label>

      <button className="submit-btn">Submit</button>
    </form>
  );
}
