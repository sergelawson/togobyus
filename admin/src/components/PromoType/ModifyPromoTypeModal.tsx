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
import { PromoTypesProp } from "./PromoTypeTable";
import usePromoType from "../../hooks/usePromoType";
import { PromoTypes } from "../../models";

type PlaceModalProps = {
  isOpen: boolean;
  loadingCreate: boolean;
  id: string | undefined;
  loadingContent: boolean;
  onClose: () => void;
  updateItem: (id: string, data: PromoTypes) => Promise<void>;
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
  const formElement = useRef<HTMLInputElement>(null);

  const { getPromos } = usePromoType();

  useEffect(() => {
    fetchItem();
  }, [id]);

  const fetchItem = async () => {
    if (!id) return;

    const data = (await getPromos(id)) as PromoTypesProp;

    if (!data) return;

    reset(data);
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<PromoTypesProp>();

  const handleClose = () => {
    onClose();
    reset();
  };

  const onSubmit: SubmitHandler<PromoTypesProp> = async (data) => {
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
          <ModalHeader>Modifier un type d'Évènenements</ModalHeader>
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
