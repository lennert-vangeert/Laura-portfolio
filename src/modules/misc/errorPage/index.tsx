import { Center } from "@mantine/core";
import Head from "@global/head";

const ErrorPage = () => {
  return (
    <>
      <Head title="Error" description="Something went wrong" />
      <Center h="100vh">
        <h1>Oops something went wrong</h1>
      </Center>
    </>
  );
};

export default ErrorPage;
