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
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PlaceType } from "./MainTable";
import { FiUpload, FiTrash2 } from "react-icons/fi";
import { nanoid } from "nanoid";
import { Storage } from "aws-amplify";
import { Places } from "../../models";

type PlaceModalProps = {
  isOpen: boolean;
  loadingCreate: boolean;
  onOpen: () => void;
  onClose: () => void;
  createPlaces: (data: Places) => Promise<void>;
};

const CreatePlaceModal: FC<PlaceModalProps> = ({
  isOpen,
  onOpen,
  onClose,
  createPlaces,
  loadingCreate,
}) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const fileUpload = useRef<HTMLInputElement>(null);
  const formElement = useRef<HTMLInputElement>(null);

  const [uploadImageUrl, setUploadImageUrl] = useState<string | null>(null);

  const [imageLoading, setImageLoading] = useState<boolean>(false);

  const [imageKey, setImageKey] = useState<string | null>(null);

  const [imgError, setImageError] = useState<boolean>(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<PlaceType>();

  const onSubmit: SubmitHandler<PlaceType> = async (data) => {
    if (!uploadImageUrl || !imageKey) {
      setImageError(true);
      setTimeout(() => {
        setImageError(false);
      }, 5000);
      return;
    }
    await createPlaces({ ...data, imageUrl: imageKey });
    console.log(data);
    onClose();
    reset();
    setUploadImageUrl(null);
  };

  const clearFile = () => {
    setUploadImageUrl(null);
    setImageKey(null);
  };

  const onChangeFile = async (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    const file = files && files[0];

    if (file) {
      const fileType = file.name.split(".")[file.name.split(".").length - 1];
      setImageLoading(true);
      setUploadImageUrl(null);
      try {
        const upload = await Storage.put(`${nanoid()}.${fileType}`, file, {
          level: "public",
        });
        console.log(upload);
        setImageKey(upload.key);
        const image = await Storage.get(upload.key);
        console.log(image);
        setUploadImageUrl(image);
      } catch (error) {
        console.log(error);
      } finally {
        setImageLoading(false);
      }
    }
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
          <ModalHeader>Ajouter un Etablissement</ModalHeader>
          <ModalCloseButton onClick={onClose} />
          <ModalBody pb={6}>
            <Box as="form" onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={errors.name?.type === "required"}>
                <FormLabel>Nom de l'Etablissement</FormLabel>
                <Input
                  placeholder="Nom"
                  {...register("name", { required: true })}
                />
              </FormControl>

              <FormControl
                mt={4}
                isInvalid={errors.address?.type === "required"}
              >
                <FormLabel>Adresse</FormLabel>
                <Input
                  placeholder="Adresse"
                  {...register("address", { required: true })}
                />
              </FormControl>
              <FormControl mt={4} isInvalid={errors.city?.type === "required"}>
                <FormLabel>Ville</FormLabel>
                <Input
                  placeholder="Ville"
                  {...register("city", { required: true })}
                />
              </FormControl>
              <FormControl mt={4} isInvalid={errors.type?.type === "required"}>
                <FormLabel>Type</FormLabel>
                <Input
                  placeholder="Type"
                  {...register("type", { required: true })}
                />
              </FormControl>
              <FormControl
                mt={4}
                isInvalid={errors.address?.type === "required"}
              >
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

export default CreatePlaceModal;
