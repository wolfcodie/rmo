import Link from "next/link";

export default function landingPage() {
  return (
    <main className="h-100">
      <h1>landing page </h1>
      <Link href="/guide" className="kk-btn kk-btn-primary w-1/5">
        guide
      </Link>
      <Link href="/dashboard" className="kk-btn kk-btn-primary kk-mt-4 w-1/5">
        dashboard
      </Link>
      <Link href="/login" className="kk-btn kk-btn-primary kk-mt-4 w-1/5">
        Login
      </Link>
      <Link href="/demo" className="kk-btn kk-btn-primary kk-mt-4 w-1/5">
        Demo
      </Link>
    </main>
  );
}
