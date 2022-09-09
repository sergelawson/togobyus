import { useRef, FC } from "react";
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
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { UtilsTypeType } from "./UtilTypeTable";
import { UtilTypes } from "../../models";

type ModalProps = {
  isOpen: boolean;
  loadingCreate: boolean;
  onClose: () => void;
  createItem: (data: UtilTypes) => Promise<void>;
};

const CreateOrgModal: FC<ModalProps> = ({
  isOpen,
  onClose,
  createItem,
  loadingCreate,
}) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const formElement = useRef<HTMLInputElement>(null);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<UtilsTypeType>();

  const onSubmit: SubmitHandler<UtilsTypeType> = async (data) => {
    await createItem({ ...data });
    console.log(data);
    onClose();
    reset();
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
          <ModalHeader>Créer une Catégorie de Numeros Utiles</ModalHeader>
          <ModalCloseButton onClick={onClose} />
          <ModalBody pb={6}>
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
          </ModalBody>
          <ModalFooter>
            <Button
              isLoading={loadingCreate}
              onClick={triggerSubmit}
              colorScheme="blue"
              mr={3}
            >
              Ajouter
            </Button>
            <Button onClick={onClose}>Annuler</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateOrgModal;
