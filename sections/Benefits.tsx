import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";
import Layout from "$store/components/LandingPage/Layout.tsx";

export interface Benefit {
  icon: LiveImage;
  title: string;
  description: string;
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

export default function Benefits ({benefits, backgroundColor, textColor}:Props) {
  <Layout backgroundColor={backgroundColor} textColor={textColor}>
    <h1>Test</h1>
  </Layout>
}