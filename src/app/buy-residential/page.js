import BuyResidentialsPage from "@/template/BuyResidentialsPage";
import React from "react";

async function BuyResidentials() {
  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });

  const data = await res.json();

  if (data.error) return <h3>مشکلی پیش آمده است</h3>;
  return <BuyResidentialsPage profiles={data.profiles} />;
}

export default BuyResidentials;
