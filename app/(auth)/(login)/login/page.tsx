import React from "react";
import Input from "@/components/guide/Input";
import { LoginBg, Logo } from "@/dist/import";
import Image from "next/image";
import Link from "next/link";

function loginPage() {
  return (
    <section className="kk-flex kk-w-100 kk-h-100 flex kk-bg-primary ">
      <div className="kk-bg-white kk-w-40 kk-mobile-w-100 kk-h-100 kk-p-6  rounded-3xl max-sm:rounded-none rounded-l-none login-left">
        <Image src={Logo} alt="Picture of the author" />
        <h1 className="kk-color-primary-dark kk-30 kk-mt-10 kk-mb-3">
          Welcome 👋
        </h1>
        <h5 className="kk-color-light-gray2 h4 kk-font-weight-500 kk-mb-10">
          Please login here
        </h5>
        <Input
          title="Email Adress"
          placeholder="youremail@gmail.com"
          inputType="text"
        />
        <Input
          title="Password"
          placeholder="***********"
          inputType="password"
        />
        <div className="flex justify-between">
          <div className="flex items-center">
            <input type="checkbox" />
            <label htmlFor="" className="h4 kk-font-wight-500 kk-ml-2">
              Remember Me
            </label>
          </div>
        </div>
      </div>
      <Image
        src={LoginBg}
        alt=""
        className="absolute right-0 kk-w-60 h-full max-sm:hidden"
      />
    </section>
  );
}

export default loginPage;
