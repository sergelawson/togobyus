import { Box, Button } from "@chakra-ui/react";
import React from "react";

type PageNavigatorProps = {
  page: number;
  limit: number;
  pageSize: number;
  next: (page: number) => void;
  previous: (page: number) => void;
};

const PageNavigator: React.FC<PageNavigatorProps> = ({
  page,
  limit,
  pageSize,
  next,
  previous,
}) => {
  return (
    <Box display={"flex"} justifyContent="space-between" m={5} ml={10} mr={10}>
      {page === 0 ? (
        <></>
      ) : (
        <Button
          size="sm"
          colorScheme="green"
          variant="solid"
          onClick={() => previous(page)}
        >
          Précedant
        </Button>
      )}
      {pageSize < limit ? (
        <></>
      ) : (
        <Button
          size="sm"
          colorScheme="green"
          variant="solid"
          onClick={() => next(page)}
        >
          Suivant
        </Button>
      )}
    </Box>
  );
};

export default PageNavigator;
