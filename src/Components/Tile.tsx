import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { PiNumberZeroDuotone } from "react-icons/pi";

interface TileProps{
  id: number,
  value: string,
  isActivated: boolean;
}

export const Tile = () => {
  
  //Setting the player's move
  const [player, setPlayer] = useState(false);

  const handleClick = ()=> {
    setPlayer(!player);
  }

  return (
    <div>
      <Button
      onClick={handleClick}
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
