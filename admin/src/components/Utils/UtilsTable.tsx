import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Th,
  Tr,
  Td,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { FC } from "react";
import { Utils } from "../../models";

export type UtilsType = {
  name: string;
  id: string;
  contact: string;
  utiltypesID: string;
};

type DeleteItemType = {
  id: string | null | undefined;
  name: string | null | undefined;
};

export type MainTableProps = {
  data: Utils[] | undefined;
  setId: (id: string) => void;
  onDelete: (id: DeleteItemType) => void;
};

const MainTable: FC<MainTableProps> = ({ data, setId, onDelete }) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Nom</Th>
            <Th>Contact</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((util) => (
            <Tr key={util.id}>
              <Td>{util?.name}</Td>
              <Td>{util?.contact}</Td>
              <Td>
                <ButtonGroup variant="outline" spacing="1" size="sm">
                  <Button onClick={() => setId(util?.id)} colorScheme="blue">
                    <FiEdit />
                  </Button>
                  <Button
                    onClick={() => onDelete({ id: util.id, name: util.name })}
                    colorScheme="red"
                  >
                    <FiTrash2 />
                  </Button>
                </ButtonGroup>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default MainTable;
