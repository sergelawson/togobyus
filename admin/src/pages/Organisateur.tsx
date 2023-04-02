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
import CreateOrgModal from "../components/Orgs/CreateOrgModal";
import ModifyOrgModal from "../components/Orgs/ModifyOrgModal";
import MainTable from "../components/Orgs/OrgTable";
import useOrgs from "../hooks/useOrgs";
import DeleteOrgDialog from "../components/Orgs/DeleteOrgDialog";
import PageNavigator from "../components/Common/PageNavigator";
type DeleteItemType = {
  id: string | null | undefined;
  name: string | null | undefined;
};
const Organisateur = () => {
  const { user } = useContext(UserContext);

  const [currentId, setCurrentId] = useState<string | undefined>();
  const [currentDeleteItem, setCurrentDeleteItem] = useState<DeleteItemType>();
  const [page, setPage] = useState<number>(0);

  const {
    fetchOrgs,
    orgs,
    deleteOrg,
    createOrgs,
    updateOrgs,
    loadingCreate,
    loadingSingle,
  } = useOrgs();

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

  const getNextPage = async (page: number) => {
    await fetchOrgs(page + 1);
    setPage(page + 1);
  };

  const getPreviousPage = async (page: number) => {
    if (page <= 0) return;
    await fetchOrgs(page - 1);
    setPage(page - 1);
  };

  const handleSetId = (id: string) => {
    onOpenMod();
    setCurrentId(id);
  };

  const showDelete = async (deleteItem: DeleteItemType) => {
    setCurrentDeleteItem(deleteItem);
    onOpenDelete();
  };

  const handleDelete = async (id: string) => {
    await deleteOrg(id);
    onCloseDelete();
  };

  return (
    <Sidebar>
      <CreateOrgModal
        isOpen={isOpenCreate}
        onClose={onCloseCreate}
        createItem={createOrgs}
        loadingCreate={loadingCreate}
      />
      <ModifyOrgModal
        id={currentId}
        isOpen={isOpenMod}
        onClose={onCloseMod}
        updateItem={updateOrgs}
        loadingCreate={loadingCreate}
        loadingContent={loadingSingle}
      />

      <DeleteOrgDialog
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
        onDelete={handleDelete}
        item={currentDeleteItem}
      />
      <Stack>
        <Box bgColor={"#FFFFFF"} p={3} boxShadow="base">
          <Flex justifyContent={"space-between"}>
            <Box as="h2" fontSize={23}>
              Organisateur
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
          <MainTable data={orgs} setId={handleSetId} onDelete={showDelete} />
          <PageNavigator
            page={page}
            pageSize={orgs.length}
            limit={7}
            next={getNextPage}
            previous={getPreviousPage}
          />
        </Box>
      </Stack>
    </Sidebar>
  );
};
export default protectedRoute(Organisateur);
