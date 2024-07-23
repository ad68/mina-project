"use client";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
import { api } from "@/app/api";
import { Button, TextBox } from "@/app/common";
import { useAxios } from "@/app/hook";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [mobileNumber, setMobileNumber] = useState("");
  const [code, setCode] = useState("");
  const [show, setShow] = useState(1);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    console.log(code);
  }, [code]);
  /* api.auth.sendOtp() */
  // ─── Functions ──────────────────────────────────────────────────────────────────

  const requestActiveCode = () => {
    let params = { mobileNumber: mobileNumber };
    setLoading(true);
    useAxios
      .post(api.auth.sendOtp, params)
      .then((res) => {
        setLoading(false);
        setShow(2);
      })
      .catch((err) => {
        setLoading(loading);
      });
  };
  const signIn = () => {
    setLoading(true);
    let params = { mobileNumber: mobileNumber, code: code };
    useAxios
      .post(api.auth.loginOrSignup, params)
      .then((res) => {
        localStorage.token = "Bearer " + res.data.token;
        setLoading(false);
        router.push("/userPage");
        /* location.href = "/userPage"; */
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-sky-300 to-purple-500">
      <section className="w-[400px] min-h-[300px] shadow-lg bg-white opacity-50 rounded-lg px-4 flex justify-center items-center -rotate-12 relative"></section>

      {show === 1 && (
        <section className="w-[400px] min-h-[300px] bg-slate-100 rounded-lg px-4 absolute grid place-items-center ">
          <TextBox
            value={mobileNumber}
            text={"            موبایل خود را وارد کنید"}
            onChange={(e) => {
              setMobileNumber(e.target.value);
            }}
          />
          <Button loading={loading} onCLick={requestActiveCode} className="m-auto mt-[-20px] ">
            ورود
          </Button>
          {/* <Link href="/userPage">لینک</Link> */}
        </section>
      )}
      {show === 2 && (
        <section className="w-[400px] min-h-[300px] bg-slate-100 rounded-lg px-4 absolute grid place-items-center">
          <TextBox
            text={"            کد را وارد کنید"}
            onChange={(e) => {
              setCode(e.target.value);
            }}
          />
          <Button loading={loading} onCLick={signIn} className="m-auto mt-[-20px] ">
            {!loading && "تایید"}
          </Button>
        </section>
      )}
    </section>
  );
}
