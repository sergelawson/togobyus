import Sidebar from "../components/Layout/Sidebar";
import protectedRoute from "../components/protectedRoute";
import {
  Stack,
  Box,
  Flex,
  HStack,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import UserContext from "../components/UserContext";
import { useContext, useState } from "react";
import { FiUser, FiPlus } from "react-icons/fi";
import CreateSponsorsModal from "../components/Sponsors/CreateSponsorsModal";
import ModifySponsorsModal from "../components/Sponsors/ModifySponsorsModal";
import MainTable from "../components/Sponsors/SponsorsTable";
import useSponsors from "../hooks/useSponsors";
import DeleteSponsorsDialog from "../components/Sponsors/DeleteSponsorsDialog";

type DeleteItemType = {
  id: string | null | undefined;
  name: string | null | undefined;
};
const Sponsors = () => {
  const { user } = useContext(UserContext);

  const [currentId, setCurrentId] = useState<string | undefined>();
  const [currentDeleteItem, setCurrentDeleteItem] = useState<DeleteItemType>();

  const {
    sponsors,
    deleteSponsor,
    createSponsor,
    updateSponsor,
    loadingCreate,
    loadingSingle,
  } = useSponsors();

  const {
    isOpen: isOpenCreate,
    onOpen: onOpenCreate,
    onClose: onCloseCreate,
  } = useDisclosure();

  const {
    isOpen: isOpenMod,
    onOpen: onOpenMod,
    onClose: onCloseMod,
  } = useDisclosure();

  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const handleSetId = (id: string) => {
    onOpenMod();
    setCurrentId(id);
  };

  const showDelete = async (deleteItem: DeleteItemType) => {
    setCurrentDeleteItem(deleteItem);
    onOpenDelete();
  };

  const handleDelete = async (id: string) => {
    await deleteSponsor(id);
    onCloseDelete();
  };

  return (
    <Sidebar>
      <CreateSponsorsModal
        isOpen={isOpenCreate}
        onClose={onCloseCreate}
        createItem={createSponsor}
        loadingCreate={loadingCreate}
      />
      <ModifySponsorsModal
        id={currentId}
        isOpen={isOpenMod}
        onClose={onCloseMod}
        updateItem={updateSponsor}
        loadingCreate={loadingCreate}
        loadingContent={loadingSingle}
      />

      <DeleteSponsorsDialog
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
        onDelete={handleDelete}
        item={currentDeleteItem}
      />
      <Stack>
        <Box bgColor={"#FFFFFF"} p={3} boxShadow="base">
          <Flex justifyContent={"space-between"}>
            <Box as="h2" fontSize={23}>
              Type de Promo
            </Box>
            <HStack>
              <Box mr={2}>
                <Button
                  onClick={onOpenCreate}
                  leftIcon={<FiPlus />}
                  size="sm"
                  colorScheme="green"
                >
                  Ajouter
                </Button>
              </Box>
              <FiUser />
              <Box display="flex" alignItems={"center"}>
                {user?.name}
              </Box>
            </HStack>
          </Flex>
        </Box>
        <Box boxShadow="base" bgColor={"#FFFFFF"}>
          <MainTable
            data={sponsors}
            setId={handleSetId}
            onDelete={showDelete}
          />
        </Box>
      </Stack>
    </Sidebar>
  );
};
export default protectedRoute(Sponsors);
