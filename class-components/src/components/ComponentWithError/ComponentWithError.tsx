export default function ComponentWithError() {
  throw new Error(
    "Hi. I'm 'ComponentWithError' component. This error was issued by me.",
  );
  return <></>;
}
