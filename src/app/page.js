import Image from "next/image";
import { Alert } from "./alert";
import { Avatars } from "./avatar"
import { AccordionDemo } from "./accordion"

export default function Home() {
  return (
    <div>
    <Alert></Alert>
    <Avatars></Avatars>
    <AccordionDemo></AccordionDemo>
    </div>
  );
}
