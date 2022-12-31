import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react'
import {Button} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import {addEdu} from '../../Features/Res'

function AddingEdu({data,setdata}) {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Institute, setInstitute] = useState("");
  const [degree, setdegree] = useState("");
  const [startDate, setStartDate]=useState("");
  const [endDate, setendDate]=useState("");
  const [description, setDescription]=useState("");
  return ( 
    <>
    <Button onClick={onOpen}>Add new</Button>

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add new education</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <h5>Institute</h5>
          <Input placeholder='Basic usage' onChange={(e)=>{setInstitute(e.target.value)}}/>
          <h5>Degree</h5>
          <Input placeholder='Basic usage' onChange={(e)=>{setdegree(e.target.value)}}/>
          <div style={{display:'flex'}}>
            <div>
             <h5> start date </h5>
             <Input placeholder='Basic usage' onChange={(e)=>{setStartDate(e.target.value)}}/>
            </div>
            <div>
             <h5> end date </h5>
             <Input placeholder='Basic usage' onChange={(e)=>{setendDate(e.target.value)}}/>
            </div>
          </div>
          <h5>Description</h5>
          <Textarea style={{resize:'none'}} placeholder='Here is a sample placeholder' onChange={(e)=>{setDescription(e.target.value)}}/>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' onClick={()=>{
            dispatch(addEdu(
              {
                "Institute" : Institute,
                "degree" : degree,
                "start" : startDate,
                "end" : endDate,
                "description" : description
              }
            ))
            onClose()
          }}>
            Save
          </Button>
          <Button variant='ghost' onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  )
}

export default AddingEdu