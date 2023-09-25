import Layout from "$store/components/LandingPage/Layout.tsx";

export interface Props {
  /**
   * @format color
   */
  backgroundColor: string;
  /**
   * @format color
   */
  textColor: string;
}

export default function MainBanner({backgroundColor, textColor}: Props) {
  return (
    <Layout backgroundColor={backgroundColor} textColor={textColor}>
      <h1>Teste</h1>
    </Layout>
  );
}