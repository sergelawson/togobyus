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
import { Organisers } from "../../models";

export type OrgType = {
  name: string;
  id: string;
  address: string;
  type: string;
  imageUrl: string;
};

type DeleteItemType = {
  id: string | null | undefined;
  name: string | null | undefined;
};

export type MainTableProps = {
  data: Organisers[] | undefined;
  setId: (id: string) => void;
  onDelete: (id: DeleteItemType) => void;
};

const MainTable: FC<MainTableProps> = ({ data, setId, onDelete }) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Nom de l'Organisateur</Th>
            <Th>Adresse</Th>
            <Th>Type</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((place) => (
            <Tr key={place.id}>
              <Td>{place?.name}</Td>
              <Td>{place?.address}</Td>
              <Td>{place?.type}</Td>
              <Td>
                <ButtonGroup variant="outline" spacing="1" size="sm">
                  <Button onClick={() => setId(place?.id)} colorScheme="blue">
                    <FiEdit />
                  </Button>
                  <Button
                    onClick={() => onDelete({ id: place.id, name: place.name })}
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
