import AddApp from "../../../../../components/dashboard/admin/apps/AddApp";
import DashboardLayout from "../../../../../components/layouts/dashboard/DashboardLayout";
import { getSession } from "next-auth/client";
import useRole from "../../../../../components/hooks/useRole";
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
      <AddApp session={session} />
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