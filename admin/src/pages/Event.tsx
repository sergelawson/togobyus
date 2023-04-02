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
import CreateEventModal from "../components/Events/CreateEventModal";
import ModifyEventModal from "../components/Events/ModifyEventModal";
import MainTable from "../components/Events/EventTable";
import useEvents from "../hooks/useEvents";
import DeleteEventDialog from "../components/Events/DeleteEventDialog";
import PageNavigator from "../components/Common/PageNavigator";

type DeleteItemType = {
  id: string | null | undefined;
  name: string | null | undefined;
};
const Events = () => {
  const { user } = useContext(UserContext);

  const [currentId, setCurrentId] = useState<string | undefined>();
  const [currentDeleteItem, setCurrentDeleteItem] = useState<DeleteItemType>();
  const [page, setPage] = useState<number>(0);

  const {
    fetchEvents,
    events,
    deleteEvent,
    createEvents,
    updateEvents,
    loadingCreate,
    loadingSingle,
  } = useEvents();

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
    await fetchEvents(page + 1);
    setPage(page + 1);
  };

  const getPreviousPage = async (page: number) => {
    if (page <= 0) return;
    await fetchEvents(page - 1);
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
    await deleteEvent(id);
    onCloseDelete();
  };

  return (
    <Sidebar>
      <CreateEventModal
        isOpen={isOpenCreate}
        onClose={onCloseCreate}
        createItem={createEvents}
        loadingCreate={loadingCreate}
      />
      <ModifyEventModal
        id={currentId}
        isOpen={isOpenMod}
        onClose={onCloseMod}
        updateItem={updateEvents}
        loadingCreate={loadingCreate}
        loadingContent={loadingSingle}
      />

      <DeleteEventDialog
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
        onDelete={handleDelete}
        item={currentDeleteItem}
      />
      <Stack>
        <Box bgColor={"#FFFFFF"} p={3} boxShadow="base">
          <Flex justifyContent={"space-between"}>
            <Box as="h2" fontSize={23}>
              Événements
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
          <MainTable data={events} setId={handleSetId} onDelete={showDelete} />
          <PageNavigator
            page={page}
            pageSize={events.length}
            limit={7}
            next={getNextPage}
            previous={getPreviousPage}
          />
        </Box>
      </Stack>
    </Sidebar>
  );
};
export default protectedRoute(Events);
