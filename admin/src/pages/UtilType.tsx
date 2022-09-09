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
import CreateUtilsModal from "../components/UtilType/CreateUtilTypeModal";
import ModifyUtilsModal from "../components/UtilType/ModifyUtilTypeModal";
import MainTable from "../components/UtilType/UtilTypeTable";
import useUtilsType from "../hooks/useUtilsType";
import DeleteUtilsDialog from "../components/UtilType/DeleteUtilTypeDialog";

type DeleteItemType = {
  id: string | null | undefined;
  name: string | null | undefined;
};
const NumeroUtils = () => {
  const { user } = useContext(UserContext);

  const [currentId, setCurrentId] = useState<string | undefined>();
  const [currentDeleteItem, setCurrentDeleteItem] = useState<DeleteItemType>();

  const {
    utils,
    deleteUtils,
    craeteUtils,
    updateUtils,
    loadingCreate,
    loadingSingle,
  } = useUtilsType();

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
    await deleteUtils(id);
    onCloseDelete();
  };

  return (
    <Sidebar>
      <CreateUtilsModal
        isOpen={isOpenCreate}
        onClose={onCloseCreate}
        createItem={craeteUtils}
        loadingCreate={loadingCreate}
      />
      <ModifyUtilsModal
        id={currentId}
        isOpen={isOpenMod}
        onClose={onCloseMod}
        updateItem={updateUtils}
        loadingCreate={loadingCreate}
        loadingContent={loadingSingle}
      />

      <DeleteUtilsDialog
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
        onDelete={handleDelete}
        item={currentDeleteItem}
      />
      <Stack>
        <Box bgColor={"#FFFFFF"} p={3} boxShadow="base">
          <Flex justifyContent={"space-between"}>
            <Box as="h2" fontSize={23}>
              Catégories de Numeros Utiles
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
          <MainTable data={utils} setId={handleSetId} onDelete={showDelete} />
        </Box>
      </Stack>
    </Sidebar>
  );
};
export default protectedRoute(NumeroUtils);
