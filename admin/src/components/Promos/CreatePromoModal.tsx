import { useRef, useState, FC } from "react";
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
  Text,
  Select,
  Textarea,
  Switch,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PromoTypes } from "./PromosTable";
import { FiUpload, FiTrash2 } from "react-icons/fi";
import { Promos } from "../../models";
import usePlaces from "../../hooks/usePlaces";
import useOrgs from "../../hooks/useOrgs";
import usePromoType from "../../hooks/usePromoType";
import { onFileUpload } from "../../helpers/imageUpload";

type ModalProps = {
  isOpen: boolean;
  loadingCreate: boolean;
  onClose: () => void;
  createItem: (data: Promos) => Promise<void>;
};

type PromosInputType = Omit<PromoTypes, "Places" | "Organisers">;

const CreateOrgModal: FC<ModalProps> = ({
  isOpen,
  onClose,
  createItem,
  loadingCreate,
}) => {
  const initialRef = useRef(null);

  const finalRef = useRef(null);

  const fileUpload = useRef<HTMLInputElement>(null);

  const formElement = useRef<HTMLInputElement>(null);

  const { orgs } = useOrgs();

  const { places } = usePlaces();

  const { promos: promosType } = usePromoType();

  const [uploadImageUrl, setUploadImageUrl] = useState<string | null>(null);

  const [imageLoading, setImageLoading] = useState<boolean>(false);

  const [imageKey, setImageKey] = useState<string | null>(null);

  const [imgError, setImageError] = useState<boolean>(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<PromosInputType>();

  const onSubmit: SubmitHandler<PromosInputType> = async (data) => {
    if (!uploadImageUrl || !imageKey) {
      setImageError(true);
      setTimeout(() => {
        setImageError(false);
      }, 5000);
      return;
    }

    await createItem({ ...data, imageUrl: imageKey });

    onClose();
    reset();
    setUploadImageUrl(null);
  };

  const clearFile = () => {
    setUploadImageUrl(null);
    setImageKey(null);
  };

  const onChangeFile = (event: React.FormEvent<HTMLInputElement>) => {
    onFileUpload({ event, setImageLoading, setUploadImageUrl, setImageKey });
  };

  const triggerUpload = () => {
    if (fileUpload.current !== null) {
      fileUpload.current.click();
    }
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
          <ModalHeader>Ajouter une Promo</ModalHeader>
          <ModalCloseButton onClick={onClose} />
          <ModalBody pb={6}>
            <Box as="form" onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={errors.name?.type === "required"}>
                <FormLabel>Nom de l'Évènement</FormLabel>
                <Input
                  placeholder="Nom"
                  {...register("name", { required: true })}
                />
              </FormControl>
              <FormControl isInvalid={errors.amount?.type === "required"}>
                <FormLabel>Prix normal en FCFA</FormLabel>
                <Input
                  placeholder="Prix normal"
                  {...register("amount", { required: true })}
                />
              </FormControl>
              <FormControl isInvalid={errors.promo_amount?.type === "required"}>
                <FormLabel>Prix promotionnel en FCFA</FormLabel>
                <Input
                  placeholder="Prix promotionnel"
                  {...register("promo_amount", { required: true })}
                />
              </FormControl>
              <FormControl isInvalid={errors.promotypesID?.type === "required"}>
                <FormLabel>Selectionner le type de Promo</FormLabel>
                <Select
                  placeholder="Type de promos"
                  {...register("promotypesID", { required: true })}
                >
                  {promosType.map((promoTypeElement) => (
                    <option
                      key={promoTypeElement.id}
                      value={promoTypeElement.id}
                    >
                      {promoTypeElement.name}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl isInvalid={errors.placesID?.type === "required"}>
                <FormLabel>Selectionner l'Etablissement</FormLabel>
                <Select
                  placeholder="Selectionner un etablissement"
                  {...register("placesID", { required: true })}
                >
                  {places.map((place) => (
                    <option key={place.id} value={place.id}>
                      {place.name}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl
                mt={4}
                isInvalid={errors.description?.type === "required"}
              >
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="Description de l'événement"
                  {...register("description", { required: true })}
                />
              </FormControl>

              <FormControl
                mt={4}
                isInvalid={errors.start_date?.type === "required"}
              >
                <FormLabel>Date de début</FormLabel>
                <Input
                  placeholder="Date de début"
                  type="date"
                  {...register("start_date", { required: true })}
                />
              </FormControl>

              <FormControl
                mt={4}
                isInvalid={errors.end_date?.type === "required"}
              >
                <FormLabel>Heure de début</FormLabel>
                <Input
                  placeholder="Date de fin"
                  type="date"
                  {...register("end_date", { required: true })}
                />
              </FormControl>

              <FormControl mt={4}>
                <Button
                  size={"sm"}
                  isLoading={imageLoading}
                  onClick={triggerUpload}
                  leftIcon={<FiUpload />}
                >
                  Telechager l'image
                </Button>
                {uploadImageUrl && (
                  <Button
                    ml={1}
                    size={"sm"}
                    colorScheme="red"
                    onClick={clearFile}
                  >
                    <FiTrash2 />
                  </Button>
                )}
                <Input
                  onChange={onChangeFile}
                  ref={fileUpload}
                  type="file"
                  display="none"
                />

                {imgError && (
                  <Text mt={2} color="tomato">
                    L'image est obligatoire
                  </Text>
                )}
              </FormControl>
              <Box mt={2}>
                {uploadImageUrl && <img src={uploadImageUrl} width={"300"} />}
              </Box>
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
