import React from 'react'
import './style.css'
import { Input } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import Bar from '../Tabbar/Tabbar'
import { Button } from '@chakra-ui/react'
import Import from './Import/Import'
import Export from './Export/Export'
import { useState } from 'react'
import ImageUploader from "react-images-upload";
import Upload from './Upload'
import { useSelector, useDispatch } from 'react-redux'
import { namer, emailset, shortbioset } from '../../Features/Res'

function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.Res.value);
  const [picture, setpicture] = useState([]);
  const [dname, setName] = useState("");
  const [demail, setemail] = useState("");
  const [dshortbio, setshortbio] = useState("");
  return (
    <div className='Main'>  
        <div className='upper'>
            <div style={{ display:'flex', marginLeft : '50px', marginTop : '10px'}}><div>Resume</div><div style={{marginLeft:'5px'}}>Builder</div></div>
            <div className='ie-btn'>
            <Import/>
            <Export/>
            </div>
        </div>
        {
        (data.name==="")?(
        <div className='middle'>
           <div style={{marginLeft:'110px'}}>
           <Upload/>
           </div>
           <div className='NE'>
             <div>
             <h1 style={{fontSize:'14px'}}> Name </h1>
             <Input placeholder='Basic usage' onChange={(e)=>{setName(e.target.value)}} />
             </div>
             <div style={{marginTop:'24px'}}>
             <h1 style={{fontSize:'14px'}}> Email ID </h1>
             <Input placeholder='Basic usage' onChange={(e)=>{setemail(e.target.value)}}/>
             </div>
             <div style={{marginTop:'10px'}}>
              <Button onClick={()=>{
                dispatch(namer({name:dname, email:demail, shortbio:dshortbio})
              )}}>Save</Button>
             </div>
           </div>
           <div className='SB'>
             <h1 style={{fontSize:'14px'}}> Short Bio </h1>
             <Textarea placeholder='Here is a sample placeholder' style={{resize:'none'}} onChange={(e)=>{setshortbio(e.target.value)}}/>
           </div>
        </div>
        ):
        (
          <div className='middle'>
          <div className='photo'>
               <Upload/> 
          </div>
          <div className='NE' style={{width:'1043px'}}>
            <h3>{data.name}</h3>
            <h2>{data.email}</h2>
            <div>
               <p>
                   {data.shortbio}
               </p>
            </div>
          </div>
       </div> 
        )
        }
        <div className='LNavbar'>
          <Bar/>
        </div>
    </div>
  )
}

export default Home