import { useRouteError } from "react-router";

function Error() {
  const error = useRouteError();
  return <h1>Something went wrong. {error.status}</h1>;
}

export default Error;
