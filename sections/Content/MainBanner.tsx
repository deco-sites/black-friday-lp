import Layout from "$store/components/LandingPage/Layout.tsx";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  title: string;
  /**
   * @format color
   */
  backgroundColor: string;
  /**
   * @format color
   */
  textColor: string;
}

export default function MainBanner({backgroundColor, textColor, title}: Props) {
  return (
    <Layout backgroundColor={backgroundColor} textColor={textColor}>
      <h1 className="text-5xl font-semibold">
        {title}
      </h1>
    </Layout>
  );
}