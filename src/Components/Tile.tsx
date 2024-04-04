import { Button } from "@chakra-ui/react";
import { RxCross1 } from "react-icons/rx";
import { PiNumberZeroDuotone } from "react-icons/pi";

interface TileProps {
  value: string | null;
  handleTileClick: () => void;
}

export const Tile: React.FC<TileProps> = ({value, handleTileClick}) => {

  return (
    <div>
      <Button
      onClick={handleTileClick}
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
