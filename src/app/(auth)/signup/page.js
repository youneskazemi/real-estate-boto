import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import SignupPage from "@/template/SignupPage";

async function Signup() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }
  return <SignupPage />;
}

export default Signup;
