import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Layout from "$store/components/LandingPage/Layout.tsx";

export interface Benefit {
  icon: LiveImage;
  title: string;
  description: string;
  alt?: string;
}

export interface Props {
  benefits: Benefit[];
  /**
   * @format color
   */
  backgroundColor: string;
  /**
   * @format color
   */
  textColor: string;
}

export default function BenefitsLp ({benefits, backgroundColor, textColor}:Props) {
  console.log("test");
  console.log(benefits);
  return (
    <Layout backgroundColor={backgroundColor} textColor={textColor}>
      {benefits.map((b) => (
        <div>
          <Image
            width={54} 
            height={54}
            src={b.icon}
            alt={b.alt}
          />
          <h1>{b.title}</h1>
          <p>{b.description}</p>
        </div>
      ))}
    </Layout>
  )
}