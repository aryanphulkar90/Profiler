import React from 'react'
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
import {addAch} from '../../Features/Res'
import { useState } from 'react'

function Adding() {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ach, setach] = useState("");
  const [Date, setDate]=useState("");
  const [description, setDescription]=useState("");
  return (
    <>
    <Button onClick={onOpen}>Add new</Button>

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add new Achievement</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <h5>Achievement</h5>
          <Input placeholder='Basic usage' onChange={(e)=>{setach(e.target.value)}} />
          <h5>Date</h5>
          <Input placeholder='Basic usage' onChange={(e)=>{setDate(e.target.value)}}/>
          <h5>Description</h5>
          <Textarea style={{resize:'none'}} placeholder='Here is a sample placeholder' onChange={(e)=>{setDescription(e.target.value)}}/>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' onClick={()=>{
            dispatch(addAch(
              {
                "title" : ach,
                "date" : Date,
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

export default Adding