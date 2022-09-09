import { useRef, FC, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
  Spinner,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { UtilsTypeType } from "./UtilTypeTable";
import useUtilsType from "../../hooks/useUtilsType";
import { UtilTypes } from "../../models";

type PlaceModalProps = {
  isOpen: boolean;
  loadingCreate: boolean;
  id: string | undefined;
  loadingContent: boolean;
  onClose: () => void;
  updateItem: (id: string, data: UtilTypes) => Promise<void>;
};

const ModifyPlacesModal: FC<PlaceModalProps> = ({
  isOpen,
  id,
  loadingCreate,
  loadingContent,
  onClose,
  updateItem,
}) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const fileUpload = useRef<HTMLInputElement>(null);
  const formElement = useRef<HTMLInputElement>(null);

  const { getUtils } = useUtilsType();

  useEffect(() => {
    fetchItem();
  }, [id]);

  const fetchItem = async () => {
    if (!id) return;

    const data = (await getUtils(id)) as UtilsTypeType;

    if (!data) return;

    reset(data);
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<UtilsTypeType>();

  const handleClose = () => {
    onClose();
    reset();
  };

  const onSubmit: SubmitHandler<UtilsTypeType> = async (data) => {
    if (!id) return;

    await updateItem(id, { ...data });
    handleClose();
  };

  const triggerSubmit = () => {
    if (formElement.current !== null) {
      formElement.current.click();
    }
  };

  return (
    <>
      <Modal
        size={"xl"}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={() => null}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modifier une Catégorie de Numeros Utiles</ModalHeader>
          <ModalCloseButton onClick={handleClose} />
          <ModalBody pb={6}>
            {loadingContent ? (
              <Spinner />
            ) : (
              <Box as="form" onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.name?.type === "required"}>
                  <FormLabel>Libellé</FormLabel>
                  <Input
                    placeholder="Libellé"
                    {...register("name", { required: true })}
                  />
                </FormControl>

                <Input ref={formElement} type="submit" display="none" />
              </Box>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              isLoading={loadingCreate}
              onClick={triggerSubmit}
              colorScheme="blue"
              mr={3}
            >
              Modifier
            </Button>
            <Button onClick={handleClose}>Annuler</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModifyPlacesModal;
