
import React from 'react'

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ children, onCLick, style, className, loading }) {
    // ─── Global Variable ────────────────────────────────────────────────────────────

    // ─── States ─────────────────────────────────────────────────────────────────────

    // ─── Life Cycle ─────────────────────────────────────────────────────────────────

    // ─── Functions ──────────────────────────────────────────────────────────────────

    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return (
        <button style={{ ...style }} onClick={onCLick} className={`relative flex justify-center gap-1 items-center  border rounded-lg px-[30px] py-3 bg-blue-500 text-white min-w-[100px] ${className}`}>{children} {loading && 
            <div class="absolute left-2">
                <div class="h-4 w-4 rounded-full border-t-2 border-b-2 border-white animate-spin"></div>
                
            </div>
        }</button>
        
    )
}
