import { AddIcon } from "@/dist/icons/import";
import Image from "next/image";

export default function Guide() {
  return (
    <section className="kk-p-6 kk-flex kk-flex-justify-center flex-col">
      <div className="kk-bg-primary kk-w-100 rounded-md kk-p-6 kk-flex kk-flex-justify-center items-center">
        <h1 className="kk-color-white kk-p-4 kk-40">Style Guide</h1>
      </div>
      <div className="kk-mt-6">
        <h1 className="kk-30  kk-border-primary kk-pb-3 kk-pr-4 kk-border-b4   kk-w-fit">
          Buttons
        </h1>
        <div className="kk-mt-4 flex gap-4">
          <button className="kk-btn kk-btn-primary">btn primary</button>
          <button className="kk-btn kk-btn-secondary">btn secondary</button>
          <button className="kk-btn kk-btn-primary kk-btn-outline">
            btn outline
          </button>
          <button className="kk-btn kk-btn-secondary kk-btn-outline">
            btn outline
          </button>
          <button className="kk-btn kk-btn-success">btn success</button>
          <button className="kk-btn kk-btn-danger">btn danger</button>
          <button className="kk-btn kk-btn-warning">btn warning</button>
          <button className="kk-btn kk-btn-info">btn info</button>
        </div>
        <div className="kk-mt-4 flex gap-4">
          <button className="kk-btn kk-btn-primary">
            <Image src={AddIcon} className="kk-mr-2" />
            btn Icon
          </button>
          <button className="kk-btn kk-btn-secondary">
            <Image src={AddIcon} className="kk-mr-2" />
            btn Icon
          </button>
        </div>
      </div>
    </section>
  );
}
