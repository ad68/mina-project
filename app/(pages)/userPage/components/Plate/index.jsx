"use client";
import { api } from "@/app/api";
import { Button, TextBox } from "@/app/common";
import { useAxiosWithToken } from "@/app/hook";
import axios from "axios";
import React, { useEffect, useState } from "react";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({setAddModal, getPlateList}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [licenseCode1, setLicenseCode1] = useState([]);
  const [licenseCode2, setLicenseCode2] = useState([]);
  const [alphabetCode, setAlphabetCode] = useState([]);
  const [title, setTitle] = useState([]);
  const [provinceCode, setProvinceCode] = useState([]);
  const [loading, setLoading] = useState(false);


  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    console.log(licenseCode1);
  }, [licenseCode1]);
  useEffect(() => {
    console.log(licenseCode2);
  }, [licenseCode2]);
  useEffect(() => {
    console.log(alphabetCode);
  }, [alphabetCode]);
  useEffect(() => {
    console.log(title);
  }, [title]);
  useEffect(()=>{
    console.log(provinceCode);
  },[provinceCode])
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const addPlate = () => {
    setLoading(true)
    let params = {
      title: title,
      licenseCode1: licenseCode1,
      licenseCode2: licenseCode2,
      alphabetCode: alphabetCode,
      provinceCode:provinceCode,
    };
    useAxiosWithToken
      .post(api.plate.add, params)
      .then((res) => {setAddModal(false)
        getPlateList();
        setLoading(false)
      })
      .catch((err) => {setLoading(false)});
  };
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="grid">
        <TextBox
          text={"عنوان پلاک"}
          className={"w-[200px] mx-auto h-[40px]"}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <section className="my-6  flex gap-3 justify-center">
          <input
            type="text"
            maxLength={2}
            minLength={2}
            onChange={(e) => {
              setLicenseCode1(e.target.value);
            }}
            className="border rounded-md h-[40px] w-[80px]"
          />
          <select
            className="border rounded-md h-[40px] w-[50px]"
            onChange={(e) => {
              setAlphabetCode(e.target.value);
            }}
          >
            <option value="الف">الف</option>
            <option value="ب">ب</option>
            <option value="پ">پ</option>
            <option value="ت">ت</option>
            <option value="ث">ث</option>
            <option value="ج">ج</option>
            <option value="چ">چ</option>
            <option value="ح">ح</option>
            <option value="خ">خ</option>
            <option value="د">د</option>
            <option value="ذ">ذ</option>
            <option value="ر">ر</option>
            <option value="ز">ز</option>
            <option value="ژ">ژ</option>
            <option value="س">س</option>
            <option value="ش">ش</option>
            <option value="ص">ص</option>
            <option value="ض">ض</option>
            <option value="ط">ط</option>
            <option value="ظ">ظ</option>
            <option value="ع">ع</option>
            <option value="غ">غ</option>
            <option value="ف">ف</option>
            <option value="ق">ق</option>
            <option value="ک">ک</option>
            <option value="گ">گ</option>
            <option value="ل">ل</option>
            <option value="م">م</option>
            <option value="ن">ن</option>
            <option value="و">و</option>
            <option value="ه">ه</option>
            <option value="ی">ی</option>
          </select>
          <input
            type="text"
            maxLength={3}
            minLength={3}
            onChange={(e) => {
              setLicenseCode2(e.target.value);
            }}
            className="border rounded-md h-[40px] w-[80px]"
          />
          <input type="text" minLength={2} maxLength={2} className="border rounded-md h-[40px] w-[80px]"onChange={(e)=>{setProvinceCode(e.target.value)}}/>
          
        </section>
        <section className="flex justify-center">
          <Button className={"w-[200px]"} onCLick={addPlate} loading={loading}>اضافه کردن</Button>
        </section>
      </section>
    </>
  );
}
