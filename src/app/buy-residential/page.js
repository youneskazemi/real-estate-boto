import BuyResidentialsPage from "@/template/BuyResidentialsPage";
import React from "react";

async function BuyResidentials({ searchParams }) {
  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });

  const data = await res.json();
  let filteredData = data.profiles;

  if (searchParams.category) {
    filteredData = filteredData.filter(
      (profile) => profile.category === searchParams.category
    );
  }
  if (data.error) return <h3>مشکلی پیش آمده است</h3>;
  return <BuyResidentialsPage profiles={filteredData} />;
}

export default BuyResidentials;
