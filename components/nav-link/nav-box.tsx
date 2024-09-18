import {
  forwardRef,
  Button,
  ButtonProps,
  Fade,
  Box,
  ScaleFade,
  useColorModeValue,
} from "@chakra-ui/react";

export interface NavBoxProps extends ButtonProps {
  isActive?: boolean;
  content?: any;
}

export const NavBox = forwardRef<NavBoxProps, "a">((props, ref) => {
  const { href, type, isActive, content, ...rest } = props;
  const bg = useColorModeValue("whiteAlpha.700", "rgba(29, 32, 37, 0.7)");

  return (
    <Fade in={isActive}>
      <Box
        p="40px"
        backdropFilter="blur(5px)"
        color="white"
        mt="4"
        top="53px"
        roundedBottomRight={"md"}
        roundedBottomLeft={"md"}
        bg={bg}
        borderColor="whiteAlpha.100"
        transitionProperty="common"
        transitionDuration="normal"
        shadow="md"
        borderWidth="1px"
        position={"absolute"}
      >
        {content}
      </Box>
    </Fade>
  );
});
NavBox.displayName = "NavBox";
