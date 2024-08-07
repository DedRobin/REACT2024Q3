import Result from "@/components/Result";
import IndexPage from "@/pages/index";

type PersonPageProps = {
  personId: string;
};

export default function PersonPage({ personId }: PersonPageProps) {
  if (!personId) throw new Error("You've lost 'personId'");
  if (Array.isArray(personId)) throw new Error("You've got 'Array'");

  return (
    <IndexPage>
      <Result personId={personId} />
    </IndexPage>
  );
}

export async function getServerSideProps(contex) {
  const { personId } = contex.query;

  return {
    props: {
      personId,
    },
  };
}
