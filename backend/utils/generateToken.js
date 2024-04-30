import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
	//create token 
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		//15 days 
		expiresIn: "15d",
	});

	res.cookie("jwt", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // ms format
		httpOnly: true, // prevent XSS attacks cross-site scripting attacks
		// it is not accessible by JS
		sameSite: "strict", // CSRF attacks cross-site request forgery attacks
		secure: process.env.NODE_ENV !== "development",
	});
};

export default generateTokenAndSetCookie;
