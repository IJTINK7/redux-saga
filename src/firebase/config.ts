
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDorQbXfCYwlHoS3ULBJxCaMSXJFhi4fDY",
	authDomain: "test-990b9.firebaseapp.com",
	projectId: "test-990b9",
	storageBucket: "test-990b9.appspot.com",
	messagingSenderId: "835403436588",
	appId: "1:835403436588:web:91ec2af26e8bb618083789"
};


const app = initializeApp(firebaseConfig);
console.log(app.options)
export const imageDB = getStorage(app)