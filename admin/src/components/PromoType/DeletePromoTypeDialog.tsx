import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { useRef, FC } from "react";

type DeleteItemType = {
  id: string | null | undefined;
  name: string | null | undefined;
};

type DialogType = {
  isOpen: boolean;
  onClose: () => void;
  item?: DeleteItemType;
  onDelete: (id: string) => void;
};

const DeleteOrgDialog: FC<DialogType> = ({
  isOpen,
  item,
  onClose,
  onDelete,
}) => {
  const cancelRef = useRef();

  const handleDelete = () => {
    if (!item?.id) return;

    onDelete(item.id);
  };

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        //@ts-ignore
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Suprimer {item?.name}
            </AlertDialogHeader>

            <AlertDialogBody>
              Êtes-vous sûr? Vous ne pouvez pas annuler cette action par la
              suite.
            </AlertDialogBody>

            <AlertDialogFooter>
              {/** @ts-ignore */}
              <Button ref={cancelRef} onClick={onClose}>
                Abandonner
              </Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3}>
                Suprimer
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default DeleteOrgDialog;
