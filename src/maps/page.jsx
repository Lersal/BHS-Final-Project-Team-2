import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { GrLocation, GrFormClose } from "react-icons/gr";
import CardLocation from "../components/CardLocation";
import Nametag from "../components/Nametag";
import Footer from "../components/Footer";
import Header from "../components/Header";

function AppLocation() {
  const [isOpen, setIsOpen] = useState([
    {
      id: 1,
      open: false,
      category: {
        title: "Product",
        type: "checkbox",
        data: [
          {
            title: "Bayi",
            select: false,
          },
          {
            title: "Anak",
            select: false,
          },
          {
            title: "Maternitas",
            select: false,
          },
        ],
      },
    },
    {
      id: 2,
      open: false,
      category: {
        title: "Tipe toko",
        type: "radio",
        data: [
          {
            title: "Toko besar",
            select: false,
          },
          {
            title: "Toko flagship",
            select: false,
          },
          {
            title: "Semua",
            select: false,
          },
        ],
      },
    },
    {
      id: 3,
      open: false,
      category: {
        type: "checkbox",
        title: "Aksesbilitas",
        data: [
          {
            title: "Tempat Parkir",
            select: false,
          },
        ],
      },
    },
  ]);
  const [filter, setFilter] = useState([]);
  const [defaultValue, setDefaultValue] = useState("Semua");

  // Fungsi untuk di accordion button
  function handleClick(id) {
    const filter = isOpen.map((item) => {
      if (item.id === id) {
        const status = !item.open;
        // Jika ID item sesuai dengan ID yang diklik, ubah nilai open menjadi kebalikan dari sebelumnya
        return { ...item, open: status };
      } else {
        // Jika ID item tidak sesuai dengan ID yang diklik, kembalikan item tersebut tanpa perubahan
        return item;
      }
    });
    setIsOpen([...filter]);
  }

  // fungsi untuk di checkbox
  const handleCheck = useCallback(
    (id, title) => {
      const filter = isOpen.map((item) => {
        if (item.id === id) {
          const data = item.category.data.map((item) => {
            if (item.title === title) {
              const status = !item.select;
              return { ...item, select: status };
            } else {
              return item;
            }
          });
          return { ...item, category: { ...item.category, data: [...data] } };
        } else {
          return item;
        }
      });
      // console.log(filter);
      setIsOpen([...filter]);
    },
    [isOpen]
  );

  // funsi untuk di radio
  const handleCheckRadio = useCallback(
    (id, title) => {
      const updatedOpen = isOpen.map((item) => {
        if (item.id === id) {
          const updatedData = item.category.data.map((option) => {
            if (option.title === title) {
              // Jika opsi yang diklik sesuai dengan opsi saat ini,
              // set nilai select menjadi true dan sisanya menjadi false
              return { ...option, select: true };
            } else {
              // Jika bukan opsi yang diklik, set nilai select menjadi false
              return { ...option, select: false };
            }
          });

          // Mengembalikan item dengan opsi yang diperbarui
          return { ...item, category: { ...item.category, data: updatedData } };
        } else {
          // Mengembalikan item yang tidak diubah
          return item;
        }
      });

      setIsOpen(updatedOpen);
    },
    [isOpen]
  );

  function removeFilter(title) {
    setIsOpen((prevState) => {
      const resultFilter = prevState.map((item) => {
        if (item.category && item.category.data) {
          const newData = item.category.data.map((obj) => {
            if (obj.title === title) {
              return {
                ...obj,
                select: false,
              };
            }
            return obj;
          });
          return {
            ...item,
            category: {
              ...item.category,
              data: newData,
            },
          };
        }
        return item;
      });

      setDefaultValue("Semua");
      return resultFilter;
    });
  }

  useEffect(() => {
    const list = isOpen.flatMap((item) => {
      return item.category.data.filter(
        (item) => item.select === true && item.title !== "Semua"
      );
    });
    setFilter(list);
  }, [isOpen]);

  return (
    <div className="max-w-[1200px] mx-auto overflow-hidden">
      <Header />
      <div className="flex flex-col w-full px-3">
        <Nametag name="Pencari lokasi toko" />
        <div className="my-3">
          <h1 className="text-2xl md:text-3xl font-medium">
            Pencari lokasi toko
          </h1>
        </div>
        <div className="my-3">
          <div className="border-t-2 border-gray-300" />
        </div>
        <div className="my-3">
          <div className="flex flex-row items-center w-[355px] md:w-[845px] h-[44px] border-2 bg-green-500">
            <div className="w-[93%] h-full">
              <input
                placeholder="Kodepos, alamat, nama toko"
                className="w-full h-full px-3 outline-none"
              />
            </div>
            <div className="w-[13%] md:w-[7%] h-full">
              <button className="w-full h-full ">
                <BiSearch className="w-1/2 h-1/2 mx-auto md:w-[75%] md:h-[75%] md:ml-2" />
              </button>
            </div>
          </div>
          <div className="flex flex-row items-center w-full">
            <GrLocation className="w-[20px] h-[20px] mr-2" />
            <p className="underline py-2">Gunakan lokasi saat ini</p>
          </div>
        </div>
        <div className="my-3 pr-3 w-full md:w-[480px]">
          <p className="mb-1 text-[15px]">Cari berdasarkan wilayah</p>
          <Select
            w={"full"}
            placeholder="Select option"
            onChange={(e) => console.log(e.target.value)}
            rounded={"sm"}
            focusBorderColor="blackAlpha.100"
            borderWidth="2px"
            _focus={{
              boxShadow: "none",
              borderColor: "none",
            }}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </div>
        <div className="my-3 pr-3 flex flex-row flex-wrap md:flex-nowrap w-full h-full">
          <div className="w-full md:w-[480px]  h-full flex flex-col ">
            <div className="md:w-[476px] w-full h-[357px] bg-green-400 text-center">
              ini map
            </div>

            <div className="md:block hidden">
              <div
                className={`my-3 flex flex-col ${
                  filter.length !== 0 ? "block" : "hidden"
                }`}
              >
                <span>Filter Aktif</span>
                <div
                  className={`flex flex-wrap flex-row ${
                    filter.length > 3 ? "h-24 " : "h-10"
                  }  gap-4 mt-2`}
                >
                  {filter.map((val, id) => (
                    <button
                      onClick={() => removeFilter(val.title)}
                      key={id}
                      className="pl-2 flex items-center"
                    >
                      <p className="text-sm">{val.title}</p>
                      <GrFormClose className="mx-2" />
                    </button>
                  ))}
                  <span className={`${filter.length > 1 ? "block" : "hidden"}`}>
                    Hapus semua
                  </span>
                </div>
              </div>
              <Accordion allowMultiple>
                {isOpen.map((val) => (
                  <div key={val.id}>
                    <AccordionItem border={"none"} marginX={-3}>
                      <>
                        <h2>
                          <AccordionButton
                            _hover={{
                              backgroundColor: "none",
                            }}
                            onClick={() => handleClick(val.id)}
                          >
                            <Box as="span" flex="1" textAlign="left">
                              <p className="font-semibold">
                                {val.category.title}
                              </p>
                            </Box>
                            {val.open ? "-" : "+"}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel className="-mt-2.5">
                          <div className="flex flex-col ">
                            <RadioGroup
                              defaultValue={defaultValue}
                              value={defaultValue}
                            >
                              <Stack spacing={5} direction="column">
                                {val.category.data.map((item, id) =>
                                  val.category.type === "radio" ? (
                                    <Radio
                                      key={id++}
                                      onChange={(e) => {
                                        setDefaultValue(e.target.value);
                                        handleCheckRadio(val.id, item.title);
                                      }}
                                      value={item.title}
                                      colorScheme="linkedin"
                                      size={"lg"}
                                    >
                                      {item.title}
                                    </Radio>
                                  ) : (
                                    val.category.type === "checkbox" && (
                                      <Checkbox
                                        key={id++}
                                        onChange={() =>
                                          handleCheck(val.id, item.title)
                                        }
                                        value={item.title}
                                        isChecked={item.select}
                                        colorScheme="linkedin"
                                        size={"lg"}
                                      >
                                        {item.title}
                                      </Checkbox>
                                    )
                                  )
                                )}
                              </Stack>
                            </RadioGroup>
                          </div>
                        </AccordionPanel>
                      </>
                    </AccordionItem>
                  </div>
                ))}
              </Accordion>
            </div>
          </div>
          <div className="w-full h-full flex flex-col  md:px-8 px-4 pb-3">
            <div className="flex flex-col w-full bg-blue-400 mt-3">
              <span className="underline text-sm">Lihat lokasi semua toko</span>
              <div className="flex flex-row items-center justify-between mt-2">
                <span className="text-sm">32 Toko </span>
                <span className="text-sm">Filter</span>
              </div>
            </div>
            {/* cards location */}
            {new Array(5).fill(0).map((val, id) => (
              <div key={id}>
                <CardLocation />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AppLocation;
