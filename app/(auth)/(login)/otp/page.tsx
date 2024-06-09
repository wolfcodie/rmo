import Link from "next/link";
import React from "react";

function otpPage() {
  return (
    <div>
      <Link href={"/"} className="kk-btn kk-btn-primary kk-mt-4 w-1/5">
        Home
      </Link>
      <Link href={"/login"} className="kk-btn kk-btn-primary kk-mt-4 w-1/5">
        Login
      </Link>
      <Link
        href={"/forgotPassword"}
        className="kk-btn kk-btn-primary kk-mt-4 w-1/5"
      >
        forgotPassword
      </Link>
    </div>
  );
}

export default otpPage;
