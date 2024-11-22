import Home from "./_components/Home";
type ParamsTypes = {
  locale: string;
};
export default function Landing({
  params,
}: {
  params: ParamsTypes;
}): JSX.Element {
  console.log(params);
  return (
    <main>
      <Home localisation={params.locale} />
    </main>
  );
}
