import DashboardSidebar from "@/layout/DashboardSidebar";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import User from "@/models/User";
import { redirect } from "next/dist/server/api-utils";
import AdminPage from "@/template/AdminPage";
import Profile from "@/models/Profile";

async function Admin() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }

  const user = await User.findOne({ email: session.user.email });

  if (user.role !== "ADMIN") redirect("/dashboard");

  const profiles = await Profile.find({ published: false });
  return (
    <DashboardSidebar role={user.role} email={user.email}>
      <AdminPage profiles={profiles} />
    </DashboardSidebar>
  );
}

export default Admin;
