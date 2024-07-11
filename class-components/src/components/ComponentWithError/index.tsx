export default function ComponentWithError({
  throwError,
}: {
  throwError: boolean;
}) {
  if (throwError) {
    throw new Error(
      "Hi. I'm 'ComponentWithError' component. This error was issued by me.",
    );
  }
  return <></>;
}
