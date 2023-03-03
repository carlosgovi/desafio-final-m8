import React, { Dispatch, FunctionComponent, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { imgAtom } from "atoms/imgAtom";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
const Dropzone: FunctionComponent<{
  setFile: Dispatch<any>;
  imgurl: Dispatch<any>;
}> = ({ setFile, imgurl }) => {
  //   const [img, setImg] = useRecoilState(imgAtom);
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setFile(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const imageUrl: any = reader.result;
      console.log(imageUrl);
      imgurl(imageUrl);
      //   setImg(imageUrl);
    };
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
  });
  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        FOTO
      </div>
    </div>
  );
};

export { Dropzone };
