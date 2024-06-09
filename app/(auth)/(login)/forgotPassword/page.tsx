import Link from "next/link";
import React from "react";

function forgotPassword() {
  return (
    <div>
      <Link href={"/"} className="kk-btn kk-btn-primary kk-mt-4 w-1/5">
        Home
      </Link>
      <Link href={"/login"} className="kk-btn kk-btn-primary kk-mt-4 w-1/5">
        Login
      </Link>
      <Link href={"/otp"} className="kk-btn kk-btn-primary kk-mt-4 w-1/5">
        Otp Page
      </Link>
    </div>
  );
}

export default forgotPassword;
