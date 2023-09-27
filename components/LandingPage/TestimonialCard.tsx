import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  text: string;
  customerPic: LiveImage;
  customerName: string;
}

export default function({text, customerPic, customerName}: Props) {
  return(
    <div className="w-96">
      <p>{text}</p>
      <div>
        <Image 
          height={64}
          width={64}
          src={customerPic}
        />
        <label>{customerName}</label>
        </div>
      </div>
  );
}