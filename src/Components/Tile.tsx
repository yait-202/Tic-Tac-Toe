import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { PiNumberZeroDuotone } from "react-icons/pi";



export const Tile = () => {
  
  return (
    <div>
      <Button
      onClick={()=>console.log("click")
}
      bg="white"
      h="120px"
      w="120px"
      border="4px"
      borderColor="slategray"
      color="black"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      _hover={{ bg: 'gray.100' }} // Change background color on hover
    >
    
    </Button>
    </div>
  );
};

export default Tile;
