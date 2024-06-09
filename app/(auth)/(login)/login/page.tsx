import Link from "next/link";
import React from "react";

function loginPage() {
  return (
    <div>
      <Link href={"/"} className="kk-btn kk-btn-primary kk-mt-4 w-1/5">
        Home
      </Link>
      <Link
        href={"/forgotPassword"}
        className="kk-btn kk-btn-primary kk-mt-4 w-1/5"
      >
        forgot Password
      </Link>
    </div>
  );
}

export default loginPage;
