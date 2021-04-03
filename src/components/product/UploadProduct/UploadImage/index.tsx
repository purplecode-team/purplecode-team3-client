import React, { useRef } from "react";
import { AiOutlinePlusCircle, AiFillCloseCircle } from "react-icons/ai";
import * as S from "./style";

interface ImageProps {
  images: any;
  addImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  deleteImage: (index: number) => void;
}
function UploadImage({ images, addImage, deleteImage }: ImageProps) {
  const inputOpenImageRef = useRef<HTMLInputElement>(null);

  const handleOpenImageRef = () => {
    const { current } = inputOpenImageRef;
    if (current) {
      current.click();
    }
  };

  return (
    <S.Container>
      {images &&
        images.map(
          (image: { toString: () => string | undefined }, index: number) => (
            <S.ImagesContainer key={index.toString(10)}>
              <AiFillCloseCircle
                size="25"
                id="close-icon"
                onClick={() => deleteImage(index)}
              />
              <S.Images src={image.toString()} alt={index.toString(10)} />
            </S.ImagesContainer>
          )
        )}
      <S.ImageUpload onClick={handleOpenImageRef}>
        <S.PlusIcon>
          <AiOutlinePlusCircle size="40" color="white" />
        </S.PlusIcon>
        <input
          type="file"
          accept="image/jpeg, image/png"
          ref={inputOpenImageRef}
          style={{ display: "none" }}
          onChange={addImage}
        />
      </S.ImageUpload>
    </S.Container>
  );
}

export default UploadImage;
