import React, { useCallback, useState } from "react";
import { useHistory } from "react-router";
import { useMutation } from "@apollo/client";
import moment from "moment";
import * as S from "./style";
import useInput from "../../../hooks/useInput";
import UploadImage from "./UploadImage";
import SelectCategory from "./SelectCategory";
import StartDate from "./StartDate";
import { UPLOAD_PRODUCT } from "../../../lib/graphql/product";
import StartPrice from "./StartPrice";
import UsedDate from "./UsedDate";
import BidPrice from "./BidPrice";

function UploadProduct(): JSX.Element {
  const history = useHistory();
  const [images, setImages] = useState<any>([]);
  const [title, onChangeTitle] = useInput("");
  const [productNum, onChangeProductNum] = useInput("");
  const [usedDate, onChangeUsedDate] = useInput(0);
  const [category, setCategory] = useState<number | null>(null);
  const [startPrice, onChangeStartPrice] = useInput(0);
  const [bidPrice, onChangeBidPrice] = useInput(0);
  const [startDate, setStartDate] = useState<any>(new Date());
  const [stringDate, setStringDate] = useState<string | null>(null);
  const [description, setDescription] = useState("");

  const [uploadProductMutation] = useMutation(UPLOAD_PRODUCT, {
    variables: {
      images,
      title,
      productNum,
      usedDate,
      category,
      startPrice,
      bidPrice,
      stringDate,
      description,
    },
  });

  const onChangeCategory = (value: number) => {
    setCategory(value);
  };
  const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };
  const onChangeStartDate = (date: any) => {
    setStartDate(date);
    const str = moment(startDate).format("YYYY/MM/DD HH:MM").toString();
    setStringDate(str);
  };
  const addImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();

      reader.onload = () => {
        const base64data = reader.result;
        setImages([...images, base64data]);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const deleteImage = (index: number) => {
    setImages(images.filter((image: any) => image !== images[index]));
  };

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      const { data } = await uploadProductMutation();
      alert("상품 업로드에 성공했습니다.");
      console.log(data);
      history.push("/");
    } catch (error) {
      alert("상품 업로드에 실패했습니다.");
      console.log(error);
    }
  }, []);

  return (
    <S.Form onSubmit={handleSubmit}>
      <UploadImage
        images={images}
        addImage={addImage}
        deleteImage={deleteImage}
      />
      <div style={{ margin: "0 25px" }}>
        <S.Input
          type="text"
          placeholder="제목을 입력해주세요."
          value={title}
          onChange={onChangeTitle}
        />
        <S.Line />
        <S.Input
          type="text"
          placeholder="정확한 제품명을 입력해주세요."
          value={productNum}
          onChange={onChangeProductNum}
        />

        <UsedDate usedDate={usedDate} onChangeUsedDate={onChangeUsedDate} />

        <SelectCategory
          category={category}
          onChangeCategory={onChangeCategory}
        />
        <S.Line />

        <S.PriceContainer>
          <StartPrice
            startPrice={startPrice}
            onChangeStartPrice={onChangeStartPrice}
          />
          <BidPrice bidPrice={bidPrice} onChangeBidPrice={onChangeBidPrice} />
        </S.PriceContainer>

        <StartDate
          onChangeStartDate={onChangeStartDate}
          startDate={startDate}
        />
        <S.Line />

        <S.TextArea
          placeholder="상세설명을 입력해주세요."
          value={description}
          onChange={onChangeDescription}
          rows={10}
        />
      </div>

      <S.SubmitButton type="submit" value="완료하기" />
    </S.Form>
  );
}

export default UploadProduct;
