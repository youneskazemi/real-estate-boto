import DashboardSidebar from "@/layout/DashboardSidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";

async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }

  await connectDB();

  const user = await User.findOne({ email: session.user.email });
  if (!user) return <h3>مشکلی پیش آمده!</h3>;
  return (
    <DashboardSidebar email={user.email} role={user.role}>
      {children}
    </DashboardSidebar>
  );
}

export default DashboardLayout;
