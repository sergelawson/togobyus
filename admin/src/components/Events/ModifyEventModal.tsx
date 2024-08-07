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
  Switch,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { EventType } from "./EventTable";
import { FiUpload, FiTrash2 } from "react-icons/fi";
import { Storage } from "aws-amplify";
import { Spinner } from "@chakra-ui/react";
import useEvents from "../../hooks/useEvents";
import { Events } from "../../models";
import usePlaces from "../../hooks/usePlaces";
import useOrgs from "../../hooks/useOrgs";
import useEventsType from "../../hooks/useEventsType";
import { onFileUpload } from "../../helpers/imageUpload";

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

  const [isRecurrent, setIsRecurrent] = useState<boolean | undefined>(false);

  const [inVedette, setInVedette] = useState<boolean | undefined>(false);

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

    setIsRecurrent(data.recurrent);
    setInVedette(data.vedette);

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
  } = useForm<EventsInputType>();

  const getTags = (data: EventsInputType) => {
    let tagList: string[] = [];

    const nameTags =
      data.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .split(" ") || [];

    if (nameTags.length > 0) {
      tagList = [...tagList, ...nameTags];
    }

    const eventTypeTags = eventsType
      .find((type) => type.id === data.eventtypesID)
      ?.name?.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    if (eventTypeTags) {
      tagList.push(eventTypeTags);
    }

    const orgsTags = orgs
      .find((type) => type.id === data.organisersID)
      ?.name?.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    if (orgsTags) {
      tagList.push(orgsTags);
    }

    const placesTags = places
      .find((type) => type.id === data.placesID)
      ?.name?.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    if (placesTags) {
      tagList.push(placesTags);
    }

    return tagList;
  };

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

    console.table(data);

    await updateItem(id, { ...data, imageUrl: imageKey, tags: getTags(data) });
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

                <FormControl mt={4} display="flex" alignItems="center">
                  <FormLabel htmlFor="recurrent" mb="0">
                    Évènement récurrent
                  </FormLabel>
                  <Switch
                    {...register("recurrent", { required: false })}
                    id="recurrent"
                    defaultChecked={isRecurrent}
                  />
                </FormControl>
                <FormControl mt={4} display="flex" alignItems="center">
                  <FormLabel htmlFor="recurrent" mb="0">
                    En vedette
                  </FormLabel>
                  <Switch
                    {...register("vedette", { required: false })}
                    id="vedette"
                    defaultChecked={inVedette}
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
