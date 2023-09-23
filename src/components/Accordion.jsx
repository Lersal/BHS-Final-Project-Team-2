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
  textAlignDirection: PropTypes.string,
  useInnerHtml: PropTypes.bool,
  deskripsi: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          link: PropTypes.string,
        })
      ),
    })
  ).isRequired,
};

function AccordionChakra({
  deskripsi,
  useInnerHtml,
  textAlignDirection,
  ...props
}) {
  return (
    <Accordion {...props} allowMultiple>
      {deskripsi.map((item, i) => (
        <div key={i}>
          <AccordionItem>
            <h2 className="my-3">
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  fontWeight={"medium"}
                  fontSize={"small"}
                  textAlign={textAlignDirection}
                >
                  {item.title}
                </Box>
                {/* <GrNext /> */}
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} mx={2.5}>
              {useInnerHtml ? (
                <Box
                  fontSize={"smaller"}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              ) : (
                <div className="flex flex-col gap-3 items-center">
                  {item.children?.map((text, i) => (
                    <p key={i} className="text-sm text-gray-400">
                      {text.title}
                    </p>
                  ))}
                </div>
              )}
            </AccordionPanel>
          </AccordionItem>
        </div>
      ))}
    </Accordion>
  );
}

export default AccordionChakra;
