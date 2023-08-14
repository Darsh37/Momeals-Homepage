import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
class FirebaseServices {
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyDc8329YyOu-nBuWtXhfXWcAgc9lIW42-k",
      authDomain: "momeals-otp.firebaseapp.com",
      projectId: "momeals-otp",
      storageBucket: "momeals-otp.appspot.com",
      messagingSenderId: "545431727284",
      appId: "1:545431727284:web:5dd123f969ed12241ffbe1",
      measurementId: "G-SSDLKQR3J3",
    };

    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
  }

  sendOTP = async (phoneNumber) => {
    const recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha", {
      size: "invisible",
    });

    try {
    const confirmationResult=  await this.auth.signInWithPhoneNumber(phoneNumber, recaptchaVerifier);
      window.confirmationResult = confirmationResult;
    } catch (error) {
      throw new Error("Failed to send OTP. Please try again.");
    }
  }

  verifyOTP=async(otpCode)=>{
    // const phoneCredential = firebase.auth.PhoneAuthProvider.credential(
    //     phoneNumber,
    //     otpCode
    //   );
  
      try {
        const  userCredential=  await window.confirmationResult.confirm(otpCode)
  // const userCredential = await this.auth.signInWithCredential(phoneCredential);
        return userCredential.user;
      } catch (error) {
        throw new Error('OTP verification failed. Please check the OTP and try again.');
      }
  }
}

export default new FirebaseServices();
