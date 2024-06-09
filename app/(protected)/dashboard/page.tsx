import Link from "next/link";
import React from "react";

function dashboard() {
  return (
    <div>
      <Link href={"/"} className="kk-btn kk-btn-primary  w-1/5">
        Home
      </Link>
      <Link href={"/myoffice"} className="kk-btn kk-btn-primary kk-mt-4 w-1/5">
        myoffice
      </Link>
    </div>
  );
}

export default dashboard;
