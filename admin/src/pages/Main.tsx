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
import CreatePlaceModal from "../components/Places/CreatePlaceModal";
import ModifyPlacesModal from "../components/Places/ModifyPlacesModal";
import MainTable from "../components/Places/MainTable";
import usePlaces from "../hooks/usePlaces";
import DeletePlaceDialog from "../components/Places/DeletePlaceDialog";
type DeleteItemType = {
  id: string | null | undefined;
  name: string | null | undefined;
};
const Main = () => {
  const { user } = useContext(UserContext);

  const [currentId, setCurrentId] = useState<string | undefined>();
  const [currentDeleteItem, setCurrentDeleteItem] = useState<DeleteItemType>();

  const {
    places,
    loading,
    deletePost,
    createPlaces,
    updatePlaces,
    loadingCreate,
    loadingSingle,
  } = usePlaces();

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
    await deletePost(id);
    onCloseDelete();
  };

  return (
    <Sidebar>
      <CreatePlaceModal
        isOpen={isOpenCreate}
        onOpen={onOpenCreate}
        onClose={onCloseCreate}
        createPlaces={createPlaces}
        loadingCreate={loadingCreate}
      />
      <ModifyPlacesModal
        id={currentId}
        isOpen={isOpenMod}
        onClose={onCloseMod}
        updatePlaces={updatePlaces}
        loadingCreate={loadingCreate}
        loadingContent={loadingSingle}
      />

      <DeletePlaceDialog
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
        onDelete={handleDelete}
        item={currentDeleteItem}
      />
      <Stack>
        <Box bgColor={"#FFFFFF"} p={3} boxShadow="base">
          <Flex justifyContent={"space-between"}>
            <Box as="h2" fontSize={23}>
              Établissements
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
          <MainTable data={places} setId={handleSetId} onDelete={showDelete} />
        </Box>
      </Stack>
    </Sidebar>
  );
};
export default protectedRoute(Main);
