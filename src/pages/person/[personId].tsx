import Result from "@/components/Result";
import IndexPage from "@/pages/index";

type PersonPageProps = {
  personId: string;
};

type ServerSideProps = {
  query: PersonPageProps;
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

export async function getServerSideProps({ query }: ServerSideProps) {
  console.log("Server");
  const { personId } = query;

  return {
    props: {
      personId,
    },
  };
}
