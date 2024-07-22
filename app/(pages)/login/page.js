//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
import { Button, TextBox } from "@/app/common";
export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <section className="w-[400px] min-h-[300px] bg-slate-100 rounded-lg px-4">
        <span className="block text-center mt-3">موبایل خود را وارد کنید</span>
        <TextBox />
        <Button className="m-auto mt-2">ورود</Button>
      </section>
    </section>
  );
}
