import React from 'react'
import { Button } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

function Export() {
const data = useSelector((state)=>state.Res.value);
const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
        JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
    };
  return (
    <Button colorScheme='teal' variant='solid' onClick={exportData}>
      Export
    </Button>
  )
}

export default Export