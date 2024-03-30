import React from "react";
import { useRouter } from "next/router";

const DetailsText = () => {
  const router = useRouter();

  return <div>details:{router.query.id}</div>;
};

export default DetailsText;
