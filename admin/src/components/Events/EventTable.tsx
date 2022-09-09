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
import { FC, useMemo } from "react";
import { Events, Organisers, Places } from "../../models";
import useOrgs from "../../hooks/useOrgs";
import usePlaces from "../../hooks/usePlaces";

export type EventType = {
  id: string;
  name: string;
  imageUrl: string;
  placesID: string;
  organisersID: string;
  eventtypesID: string;
  start_time: string;
  end_time: string;
  date: string;
  description: string;
  Places?: Places;
  Organisers?: Organisers;
};

type DeleteItemType = {
  id: string | null | undefined;
  name: string | null | undefined;
};

export type MainTableProps = {
  data: Events[] | undefined;
  setId: (id: string) => void;
  onDelete: (id: DeleteItemType) => void;
};

const MainTable: FC<MainTableProps> = ({ data, setId, onDelete }) => {
  const { orgs } = useOrgs();
  const { places } = usePlaces();

  const placesMap = useMemo(() => {
    const newPlaces = new Map();
    places.map((place) => {
      newPlaces.set(place.id, place);
    });

    return newPlaces;
  }, [places]);

  const orgsMap = useMemo(() => {
    const newOrgs = new Map();

    orgs.map((org) => {
      newOrgs.set(org.id, org);
    });

    return newOrgs;
  }, [orgs]);

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Nom de l'Organisateur</Th>
            <Th>Organisateur</Th>
            <Th>Etablissement</Th>
            <Th>Date</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((event) => (
            <Tr key={event.id}>
              <Td>{event?.name}</Td>
              <Td>{placesMap.get(event?.placesID)?.name}</Td>
              <Td>{orgsMap.get(event?.organisersID)?.name}</Td>
              <Td>
                {new Date(event?.date || "2022")?.toLocaleDateString("fr-FR")}
              </Td>
              <Td>
                <ButtonGroup variant="outline" spacing="1" size="sm">
                  <Button onClick={() => setId(event?.id)} colorScheme="blue">
                    <FiEdit />
                  </Button>
                  <Button
                    onClick={() => onDelete({ id: event.id, name: event.name })}
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
