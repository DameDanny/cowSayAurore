import cowsay from "cowsay";
import "dotenv/config";

const output = cowsay.say({
	text: `Hello I'm ${process.env.NAME} from ${process.env.CAMPUS}!`,
	e: "-O",
	T: "U",
});

console.log(output);
