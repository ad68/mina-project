"use client";
import { api } from "@/app/api";
import { Button, Modal, TextBox } from "@/app/common";
import { useAxios, useAxiosWithToken } from "@/app/hook";
import React, { useState } from "react";
import Plate from "./components/Plate";
import axios from "axios";
import EditForm from "./components/EditForm";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [data, setData] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [rowData, setRowData] = useState();
  const [click, setClick] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editModal, setEditModal] = useState(false);
  
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const getPlateList = () => {
    setLoading(true);
    useAxiosWithToken
      .get(api.plate.getPlates)
      .then((res) => {
        setLoading(false);
        setData(res?.data?.elements);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
const deletePlate = (id)=>{
  useAxiosWithToken.delete(api.plate.delete+id).then(()=>{getPlateList()}).catch()
}
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="h-screen w-full bg-gradient-to-r from-sky-300 to-purple-500 grid justify-items-center gap-6 content-center">
        <Button onCLick={getPlateList}>نمایش پلاک‌ها</Button>
        <Button onCLick={() => setAddModal(true)}>Add</Button>
        <table className="border-collapse border border-slate-100 p-2 text-center h-[200px] rounded-md">
          <tbody className="bg-white ">
            {data?.map((item, index) => (
              <>
                <tr>
                  <td class="border border-blue-950 p-3">id = {item.id}</td>
                  <td class="border border-blue-950 p-3">{item.title}</td>
                  <td class="border border-blue-950 p-3">
                    {item.alphabetCode} , {item.licenseCode1} , {item.licenseCode2}
                  </td>
                  <td>
                    <Button onCLick={()=>{deletePlate(item.id)}}>حذف</Button>
                  </td>
                  <td>
                    <Button onCLick={()=>{
                      setRowData(item)
                      setEditModal(true)
                    }}>ویرایش</Button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        <Modal open={addModal} onClose={() => setAddModal(false)} >
          
          <Plate setAddModal={setAddModal} getPlateList={getPlateList} />
        </Modal>
        <Modal open={editModal} onClose={()=> setEditModal(false)}>
        {rowData && <EditForm rowData={rowData} getPlate={getPlateList} />}
        </Modal>
      </section>
    </>
  );
}
