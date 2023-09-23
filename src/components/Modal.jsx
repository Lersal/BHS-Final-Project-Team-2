import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { formatCurrency } from "../utils/formatCurrency";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function BasicUsage({ actionAdd }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cartRx = useSelector((state) => state.cartSlice);
  const navigate = useNavigate();

  return (
    <>
      <Button
        onClick={() => {
          onOpen();
          actionAdd();
        }}
        textAlign="center"
        color="white"
        fontWeight="bold"
        fontSize="md"
        bg="red.500"
        p={2.5}
        mt={8}
        border="1px"
        borderColor="blackAlpha.400"
        _hover={{ bg: "red.600" }}
        rounded={false}
      >
        TAMBAHKAN KE KERANJANG
      </Button>

      <Modal
        isCentered
        motionPreset="slideInBottom"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent mx={4} maxW={"650"}>
          <ModalHeader>
            {cartRx.isExist
              ? `GAGAL MENAMBAHKAN PRODUK KE KERANJANG`
              : `${cartRx.dataFromClient[0]?.cartStock} PRODUK DITAMBAHKAN KE
            KERANJANG ANDA`}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex flex-row justify-between">
              {cartRx.isExist ? (
                <>
                  <p className="text-sm">
                    DATA PRODUK YANG ANDA PILIH SUDAH ADA DI KERANJANG ANDA
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <span className="text-lg font-bold">SUBTOTAL</span> |{" "}
                    {cartRx.subTotalCart} produk{" "}
                  </p>
                  <p className="text-lg font-bold">
                    {formatCurrency(cartRx.subTotalPrice)}
                  </p>
                </>
              )}
            </div>
          </ModalBody>

          <ModalFooter justifyContent="center" gap={2}>
            <Button
              w={"full"}
              variant="outline"
              bgColor={"#1b1b1b"}
              textColor={"white"}
              rounded={false}
              _hover={{ bg: "blackAlpha.800" }}
              mr={3}
              onClick={() => {
                onClose();
                navigate("/cart");
              }}
            >
              LIHAT KERANJANG
            </Button>
            <Button
              w={"full"}
              variant="outline"
              colorScheme="blackAlpha.200"
              rounded={false}
              _hover={{ bg: "blackAlpha.200" }}
              onClick={() => {
                onClose();
              }}
            >
              LANJUT BELANJA
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BasicUsage;
