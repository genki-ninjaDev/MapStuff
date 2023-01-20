import { getSession } from "@auth0/nextjs-auth0";
import ViewLocation from "../../../../../../../components/dashboard/admin/apps/ViewLocation";
import DashboardLayout from "../../../../../../../components/layouts/dashboard/DashboardLayout";
import Head from "next/head";

export default function Index({ session }) {
    //get role from custom hooks 
    const [role] = useRole(session)
    //add checking if the role includes admin
    if(!role.includes('Admin')) return <p>Access Denied</p>;

  return (
    <DashboardLayout session={session}>
      <Head>
        <title>Admin Dashboard - Apps</title>
        <meta property="og:title" content="MapStuff.io" key="title" />
      </Head>
      <ViewLocation session={session} />
    </DashboardLayout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context.req, context.res);
  const res = await fetch(process.env.NEXTAUTH_URL + "/api/stripe/me", {
    method: "POST",
    body: JSON.stringify({
      session: session,
    }),
  });

  if (session) {
    const plan = await res.json();
    session.user.plan = plan.plan;
  }
  return {
    props: { session: JSON.parse(JSON.stringify(session)) },
  };
}