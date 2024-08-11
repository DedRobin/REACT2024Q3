import Link from "next/link";

export default function Custom404() {
  return (
    <div className="error-page">
      <h2 className="error-status">Error 404</h2>
      <p className="error-text"> Not found</p>
      <Link href="/">Go back</Link>
    </div>
  );
}
