import Link from "next/link";
import Head from "next/head";
import Button from "../../components/button";
import { getDataFromAPI } from "../../lib/user";
const login = () => {
  getDataFromAPI();
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <div className=" bg-red-500">
        <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        Login
        <Button />
        <Link href="/">Back Home</Link>
      </div>
    </div>
  );
};

export default login;
