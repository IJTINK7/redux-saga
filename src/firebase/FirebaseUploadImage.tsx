import {useState} from "react";
import {imageDB} from "./config";
import {ref, uploadBytes} from "firebase/storage";
import {v4} from "uuid";

export const FirebaseUploadImage = () => {
	const [img, setImg] = useState<any>("")
	const onChangeHandler: any = (e: any) => {
		setImg(e.currentTarget.files[0])
	}
	const onClickHandler: any = () => {
		const imgRef = ref(imageDB, `files/${v4()}`)
		uploadBytes(imgRef, img).then(res=>console.log(res))
	}
	return(
		<div>
			<input type={"file"} onChange={onChangeHandler}/>
			<button onClick={onClickHandler}>Upload</button>
		</div>
	)
}