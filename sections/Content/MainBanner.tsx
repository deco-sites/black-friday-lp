import Layout from "$store/components/LandingPage/Layout.tsx";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  title: string;
  caption?: string;
  content?: string;
  /**
   * @format color
   */
  backgroundColor: string;
  /**
   * @format color
   */
  textColor: string;
}

export default function MainBanner({backgroundColor, textColor, title, caption, content}: Props) {
  return (
    <Layout backgroundColor={backgroundColor} textColor={textColor}>
      <h2 className="text-base font-bold h-5 text-transparent bg-clip-text bg-gradient-to-b from-pink-500 to bg-purple-600">
        {caption}
      </h2>
      <h1 className="text-5xl font-semibold">
        {title}
      </h1>
      <p className="text-lg mt-[25px]">
        {content}
      </p>
    </Layout>
  );
}