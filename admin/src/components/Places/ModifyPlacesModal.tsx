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
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PlaceType } from "./MainTable";
import { FiUpload, FiTrash2 } from "react-icons/fi";
import { nanoid } from "nanoid";
import { Storage } from "aws-amplify";
import { Places } from "../../models";
import { Spinner } from "@chakra-ui/react";
import usePlaces from "../../hooks/usePlaces";

type PlaceModalProps = {
  isOpen: boolean;
  loadingCreate: boolean;
  id: string | undefined;
  loadingContent: boolean;
  onClose: () => void;
  updatePlaces: (id: string, data: Places) => Promise<void>;
};

const ModifyPlacesModal: FC<PlaceModalProps> = ({
  isOpen,
  id,
  loadingCreate,
  loadingContent,
  onClose,
  updatePlaces,
}) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const fileUpload = useRef<HTMLInputElement>(null);
  const formElement = useRef<HTMLInputElement>(null);

  const { getPlace } = usePlaces();

  const [uploadImageUrl, setUploadImageUrl] = useState<string | null>(null);

  const [imageLoading, setImageLoading] = useState<boolean>(false);

  const [imageKey, setImageKey] = useState<string | null>(null);

  const [imgError, setImageError] = useState<boolean>(false);

  useEffect(() => {
    fecthPlaces();
  }, [id]);

  const fecthPlaces = async () => {
    if (!id) return;

    clearFile();

    const data = (await getPlace(id)) as PlaceType;

    if (!data) return;

    reset(data);

    if (data.imageUrl) {
      const imageUrl = await Storage.get(data.imageUrl);
      console.log("hello", imageUrl);
      setUploadImageUrl(imageUrl);
      setImageKey(data.imageUrl);
    }
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<PlaceType>();

  const handleClose = () => {
    onClose();
    reset();
  };

  const onSubmit: SubmitHandler<PlaceType> = async (data) => {
    if (!id) return;

    if (!uploadImageUrl || !imageKey) {
      setImageError(true);
      setTimeout(() => {
        setImageError(false);
      }, 5000);
      return;
    }
    await updatePlaces(id, { ...data, imageUrl: imageKey });
    handleClose();
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
          <ModalHeader>Modifier un Etablissement</ModalHeader>
          <ModalCloseButton onClick={handleClose} />
          <ModalBody pb={6}>
            {loadingContent ? (
              <Spinner />
            ) : (
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
                <FormControl
                  mt={4}
                  isInvalid={errors.city?.type === "required"}
                >
                  <FormLabel>Ville</FormLabel>
                  <Input
                    placeholder="Ville"
                    {...register("city", { required: true })}
                  />
                </FormControl>
                <FormControl
                  mt={4}
                  isInvalid={errors.type?.type === "required"}
                >
                  <FormLabel>Type</FormLabel>
                  <Input
                    placeholder="Type"
                    {...register("type", { required: true })}
                  />
                </FormControl>
                <FormControl
                  mt={4}
                  isInvalid={errors.type?.type === "required"}
                >
                  <FormLabel>Contact</FormLabel>
                  <Input
                    placeholder="Contact"
                    {...register("contact", { required: true })}
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
