import React, { useState } from 'react'
import { importhelp } from '../../../Features/Res';
import { useDispatch } from 'react-redux'

function Import({data,setdata}) {
  const dispatch = useDispatch();
  const handleFile = (e) =>{
    const reader = new FileReader();
    reader.readAsText(e.target.files[0],"UTF-8");
    reader.onload = (e) => {
        dispatch(importhelp(JSON.parse(e.target.result)));
    }
}
  return (
    <>
    <input
    placeholder="Import"
    type="file"
    onChange={(e)=>{handleFile(e)}}
    />
    </>
  )
}

export default Import