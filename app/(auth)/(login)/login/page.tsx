import React from "react";
import Input from "@/components/guide/Input";
import { Logo } from "@/dist/icons/import";
import Image from "next/image";
import Link from "next/link";

function loginPage() {
  return (
    <section className="kk-flex kk-w-100 kk-h-100 flex kk-bg-primary">
      <div className="kk-bg-white kk-w-40 kk-h-100 kk-p-6 rounded-3xl rounded-l-none">
        <Image src={Logo} alt="Picture of the author" />
        <h1>Welcome 👋</h1>
        <h5>Please login here</h5>
        <Input
          title="Email Adress"
          placeholder="youremailhhh@gmail.com"
          inputType="text"
        />
      </div>
    </section>
  );
}

export default loginPage;
