import Image from "apps/website/components/Image.tsx";
import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";
import Layout from "$store/components/LandingPage/Layout.tsx";

export interface BenefitButton {
  icon: LiveImage;
  text: string;
  image: LiveImage;
}

export interface Props {
  title: string;
  content: string;
  benefitButtons: BenefitButton[];
  /**
   * @format color
   */
  backgroundColor: string;
  /**
   * @format color
   */
  textColor: string;
}

export default function BenefitGallery({title, content, benefitButtons, backgroundColor, textColor}: Props) {
  return (
    <Layout backgroundColor={backgroundColor} textColor={textColor}>
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p>{content}</p>
    </Layout>
  );
}