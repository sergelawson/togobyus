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
import { EventType } from "./EventTable";
import { FiUpload, FiTrash2 } from "react-icons/fi";
import { nanoid } from "nanoid";
import { Storage } from "aws-amplify";
import { Spinner } from "@chakra-ui/react";
import useEvents from "../../hooks/useEvents";
import { Events } from "../../models";
import usePlaces from "../../hooks/usePlaces";
import useOrgs from "../../hooks/useOrgs";
import useEventsType from "../../hooks/useEventsType";

type PlaceModalProps = {
  isOpen: boolean;
  loadingCreate: boolean;
  id: string | undefined;
  loadingContent: boolean;
  onClose: () => void;
  updateItem: (id: string, data: Events) => Promise<void>;
};

type EventsInputType = Omit<EventType, "Places" | "Organisers">;

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

  const { getEvent } = useEvents();

  const [uploadImageUrl, setUploadImageUrl] = useState<string | null>(null);

  const [imageLoading, setImageLoading] = useState<boolean>(false);

  const [imageKey, setImageKey] = useState<string | null>(null);

  const [imgError, setImageError] = useState<boolean>(false);

  const { orgs } = useOrgs();
  const { places } = usePlaces();
  const { events: eventsType } = useEventsType();

  useEffect(() => {
    fetchItem();
  }, [id]);

  const fetchItem = async () => {
    if (!id) return;
    clearFile();

    const data = (await getEvent(id)) as EventType;

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
  } = useForm<EventsInputType>();

  const handleClose = () => {
    onClose();
    reset();
  };

  const onSubmit: SubmitHandler<EventsInputType> = async (data) => {
    if (!id) return;

    if (!uploadImageUrl || !imageKey) {
      setImageError(true);
      setTimeout(() => {
        setImageError(false);
      }, 5000);
      return;
    }
    await updateItem(id, { ...data, imageUrl: imageKey });
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
          <ModalHeader>Modifier un Évènement</ModalHeader>
          <ModalCloseButton onClick={handleClose} />
          <ModalBody pb={6}>
            {loadingContent ? (
              <Spinner />
            ) : (
              <Box as="form" onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.name?.type === "required"}>
                  <FormLabel>Nom de l'Évènement</FormLabel>
                  <Input
                    placeholder="Nom"
                    {...register("name", { required: true })}
                  />
                </FormControl>
                <FormControl
                  isInvalid={errors.eventtypesID?.type === "required"}
                >
                  <FormLabel>Selectionner le type d'évènements</FormLabel>
                  <Select
                    placeholder="Type d'évènements"
                    {...register("eventtypesID", { required: true })}
                  >
                    {eventsType.map((event) => (
                      <option key={event.id} value={event.id}>
                        {event.name}
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
                  isInvalid={errors.organisersID?.type === "required"}
                >
                  <FormLabel>Selectionner l'Organisateur</FormLabel>
                  <Select
                    placeholder="Selctionner un organisateur"
                    {...register("organisersID", { required: true })}
                  >
                    {orgs.map((org) => (
                      <option key={org.id} value={org.id}>
                        {org.name}
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
                  isInvalid={errors.date?.type === "required"}
                >
                  <FormLabel>Date</FormLabel>
                  <Input
                    placeholder="Date"
                    type="date"
                    {...register("date", { required: true })}
                  />
                </FormControl>

                <FormControl
                  mt={4}
                  isInvalid={errors.start_time?.type === "required"}
                >
                  <FormLabel>Heure de début</FormLabel>
                  <Input
                    placeholder="Heure de début"
                    type="time"
                    {...register("start_time", { required: true })}
                  />
                </FormControl>
                <FormControl
                  mt={4}
                  isInvalid={errors.end_time?.type === "required"}
                >
                  <FormLabel>Heure de fin</FormLabel>
                  <Input
                    placeholder="Heure de fin"
                    type="time"
                    {...register("end_time", { required: true })}
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
