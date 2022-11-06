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
import { Promos, Organisers, Places } from "../../models";
import useOrgs from "../../hooks/useOrgs";
import usePlaces from "../../hooks/usePlaces";

export type PromoTypes = {
  id: string;
  name: string;
  imageUrl: string;
  placesID: string;
  organisersID: string;
  promotypesID: string;
  amount: string;
  promo_amount: string;
  start_date: string;
  end_date: string;
  description: string;
  Places?: Places;
  Organisers?: Organisers;
};

type DeleteItemType = {
  id: string | null | undefined;
  name: string | null | undefined;
};

export type MainTableProps = {
  data: Promos[] | undefined;
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

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Libellé</Th>
            <Th>Etablissement</Th>
            <Th>Date début</Th>
            <Th>Date fin</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((promo) => (
            <Tr key={promo.id}>
              <Td>{promo?.name}</Td>
              <Td>{placesMap.get(promo?.placesID)?.name}</Td>
              <Td>
                {new Date(promo?.start_date || "2022")?.toLocaleDateString(
                  "fr-FR"
                )}
              </Td>
              <Td>
                {new Date(promo?.end_date || "2022")?.toLocaleDateString(
                  "fr-FR"
                )}
              </Td>
              <Td>
                <ButtonGroup variant="outline" spacing="1" size="sm">
                  <Button onClick={() => setId(promo?.id)} colorScheme="blue">
                    <FiEdit />
                  </Button>
                  <Button
                    onClick={() => onDelete({ id: promo.id, name: promo.name })}
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
