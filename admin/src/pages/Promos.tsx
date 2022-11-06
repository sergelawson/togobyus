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
import CreatePromoModal from "../components/Promos/CreatePromoModal";
import ModifyPromoModal from "../components/Promos/ModifyPromoModal";
import MainTable from "../components/Promos/PromosTable";
import usePromos from "../hooks/usePromos";
import DeletePromoDialog from "../components/Promos/DeletePromoDialog";

type DeleteItemType = {
  id: string | null | undefined;
  name: string | null | undefined;
};
const Promos = () => {
  const { user } = useContext(UserContext);

  const [currentId, setCurrentId] = useState<string | undefined>();
  const [currentDeleteItem, setCurrentDeleteItem] = useState<DeleteItemType>();

  const {
    promos,
    deletePromo,
    createPromo,
    updatePromo,
    loadingCreate,
    loadingSingle,
  } = usePromos();

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
    await deletePromo(id);
    onCloseDelete();
  };

  return (
    <Sidebar>
      <CreatePromoModal
        isOpen={isOpenCreate}
        onClose={onCloseCreate}
        createItem={createPromo}
        loadingCreate={loadingCreate}
      />
      <ModifyPromoModal
        id={currentId}
        isOpen={isOpenMod}
        onClose={onCloseMod}
        updateItem={updatePromo}
        loadingCreate={loadingCreate}
        loadingContent={loadingSingle}
      />

      <DeletePromoDialog
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
        onDelete={handleDelete}
        item={currentDeleteItem}
      />
      <Stack>
        <Box bgColor={"#FFFFFF"} p={3} boxShadow="base">
          <Flex justifyContent={"space-between"}>
            <Box as="h2" fontSize={23}>
              Promos
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
          <MainTable data={promos} setId={handleSetId} onDelete={showDelete} />
        </Box>
      </Stack>
    </Sidebar>
  );
};
export default protectedRoute(Promos);
