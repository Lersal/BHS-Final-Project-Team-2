import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
// import { GrNext } from "react-icons/gr";

AccordionChakra.propTypes = {
  deskripsi: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ).isRequired,
};

function AccordionChakra({ deskripsi, ...props }) {
  return (
    <Accordion {...props} allowMultiple>
      {deskripsi.map((item, i) => (
        <div key={i}>
          <AccordionItem>
            <h2 className="my-3">
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {item.title}
                </Box>
                {/* <GrNext /> */}
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} mx={2.5}>
              <Box dangerouslySetInnerHTML={{ __html: item.text }} />
            </AccordionPanel>
          </AccordionItem>
        </div>
      ))}
    </Accordion>
  );
}

export default AccordionChakra;
