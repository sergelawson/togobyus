import Resizer from "react-image-file-resizer";
import { nanoid } from "nanoid";
import { Storage } from "aws-amplify";

type FileUplaodType = {
  event: React.FormEvent<HTMLInputElement>;
  setImageLoading: (value: boolean) => void;
  setUploadImageUrl: (value: string | null) => void;
  setImageKey: (value: string) => void;
};

const resizeFile = (file: any) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      700,
      800,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "file",
      700,
      800
    );
  });

const onFileUpload = async ({
  event,
  setImageLoading,
  setUploadImageUrl,
  setImageKey,
}: FileUplaodType) => {
  const target = event.target as HTMLInputElement;
  const files = target.files;
  const file = files && files[0];

  if (file) {
    const fileType = file.name.split(".")[file.name.split(".").length - 1];
    const resizedFile = await resizeFile(file);

    setImageLoading(true);
    setUploadImageUrl(null);
    try {
      const upload = await Storage.put(`${nanoid()}.${fileType}`, resizedFile, {
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
export { onFileUpload };
