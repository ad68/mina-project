"use client";
import { api } from "@/app/api";
import { useAxiosWithToken } from "@/app/hook";
import React, { useState } from "react";
import { Button, Modal, TextBox } from "@/app/common";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ rowData, getPlate }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  const [loading, setLoading] = useState(false);
  const [licenseCode1, setLicenseCode1] = useState([]);
  const [licenseCode2, setLicenseCode2] = useState([]);
  const [alphabetCode, setAlphabetCode] = useState([]);
  const [title, setTitle] = useState(rowData.title);
  const [provinceCode, setProvinceCode] = useState([]);


  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const putPlate = () => {
    let params = {
      licenseCode1: licenseCode1,
      licenseCode2: licenseCode2,
      alphabetCode: alphabetCode,
      title: title,
      provinceCode: provinceCode,
    }
    useAxiosWithToken.put(api.plate.edit + rowData?.id, params).then((res) => { getPlate() }).catch()
  }
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return <>
    <section className="grid">
      <TextBox
        text={"عنوان پلاک"}
        className={"w-[200px] mx-auto h-[40px]"}
        value={title}
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
        <input type="text" minLength={2} maxLength={2} className="border rounded-md h-[40px] w-[80px]" onChange={(e) => { setProvinceCode(e.target.value) }} />

      </section>
      <section className="flex justify-center">
        <Button className={"w-[200px]"} onCLick={putPlate} loading={loading}>ذخیره </Button>
      </section>
    </section></>;
}
