import { useRef, useState, useEffect, FC } from "react";
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
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PromoTypes } from "./PromosTable";
import { FiUpload, FiTrash2 } from "react-icons/fi";
import { Storage } from "aws-amplify";
import usePromos from "../../hooks/usePromos";
import { Promos } from "../../models";
import usePlaces from "../../hooks/usePlaces";
import useOrgs from "../../hooks/useOrgs";
import usePromosType from "../../hooks/usePromoType";
import { onFileUpload } from "../../helpers/imageUpload";

type PlaceModalProps = {
  isOpen: boolean;
  loadingCreate: boolean;
  id: string | undefined;
  loadingContent: boolean;
  onClose: () => void;
  updateItem: (id: string, data: Promos) => Promise<void>;
};

type PromoInputType = Omit<PromoTypes, "Places" | "Organisers">;

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

  const { getPromo } = usePromos();

  const [uploadImageUrl, setUploadImageUrl] = useState<string | null>(null);

  const [imageLoading, setImageLoading] = useState<boolean>(false);

  const [imageKey, setImageKey] = useState<string | null>(null);

  const [imgError, setImageError] = useState<boolean>(false);

  const { orgs } = useOrgs();
  const { places } = usePlaces();
  const { promos: promosType } = usePromosType();

  useEffect(() => {
    fetchItem();
  }, [id]);

  const fetchItem = async () => {
    if (!id) return;
    clearFile();

    const data = (await getPromo(id)) as PromoTypes;

    if (!data) return;

    reset(data);

    if (data.imageUrl) {
      const imageUrl = await Storage.get(data.imageUrl);
      // console.log("hello", imageUrl);
      setUploadImageUrl(imageUrl);
      setImageKey(data.imageUrl);
    }
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<PromoInputType>();

  const handleClose = () => {
    onClose();
    reset();
  };

  const onSubmit: SubmitHandler<PromoInputType> = async (data) => {
    if (!id) return;

    if (!uploadImageUrl || !imageKey) {
      setImageError(true);
      setTimeout(() => {
        setImageError(false);
      }, 5000);
      return;
    }

    console.table(data);

    await updateItem(id, { ...data, imageUrl: imageKey });
    handleClose();
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

export default ModifyPlacesModal;
