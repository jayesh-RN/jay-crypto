import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import avatarSrc from "../assets/per.png";

// const avatarSrc =
//   "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F2002427-man-avatar-character-isolated-icon&psig=AOvVaw0Me8-MYtN7x-06pft8ufj0&ust=1679505906558000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNDljZnF7f0CFQAAAAAdAAAAABAJ";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
