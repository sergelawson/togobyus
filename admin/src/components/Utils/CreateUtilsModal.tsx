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
  Select,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { UtilsType } from "./UtilsTable";
import { Utils } from "../../models";
import useUtilsType from "../../hooks/useUtilsType";

type ModalProps = {
  isOpen: boolean;
  loadingCreate: boolean;
  onClose: () => void;
  createItem: (data: Utils) => Promise<void>;
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

  const { utils: utilsType } = useUtilsType();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<UtilsType>();

  const onSubmit: SubmitHandler<UtilsType> = async (data) => {
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
          <ModalHeader>Ajouter un Numéro Utile</ModalHeader>
          <ModalCloseButton onClick={onClose} />
          <ModalBody pb={6}>
            <Box as="form" onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={errors.name?.type === "required"}>
                <FormLabel>Nom du service</FormLabel>
                <Input
                  placeholder="Nom"
                  {...register("name", { required: true })}
                />
              </FormControl>

              <FormControl isInvalid={errors.utiltypesID?.type === "required"}>
                <FormLabel>
                  Selectionner une catégorie de numeros utiles
                </FormLabel>
                <Select
                  placeholder="Catégories de numeros utiles"
                  {...register("utiltypesID", { required: true })}
                >
                  {utilsType.map((util) => (
                    <option key={util.id} value={util.id}>
                      {util.name}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                mt={4}
                isInvalid={errors.contact?.type === "required"}
              >
                <FormLabel>Contact</FormLabel>
                <Input
                  placeholder="Contact"
                  {...register("contact", { required: true })}
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
