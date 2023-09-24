import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";
import Layout from "$store/components/LandingPage/Layout.tsx";
import Drawer from "$store/components/ui/Drawer.tsx";

export interface navItem {
  item: string;
  href: string;
}

export interface Props {
    items: navItem[];
    headerLogo?: LiveImage;
    cartIcon?: LiveImage;
    /**
     * @format color
     */
    backgroundColor: string;
    /**
     * @format color
     */
    textColor: string;
}
  
export default function LandingHeader({ items, headerLogo, cartIcon, backgroundColor, textColor }: Props) {
  return (
    <Layout backgroundColor={backgroundColor} textColor={textColor}>
      <header className="h-[96px]">
        <img 
          src={headerLogo} 
          className="w-[152px] h-[31px] float-left mt-[30px]"
        />
        <nav className="float-right">
          <ul className="flex gap-8 h-[96px] items-center">
            {items.map(
              navItem => <li>
                <a href={navItem.href}>
                  {navItem.item}
                </a>
              </li>
            )}
            <li>
              <div className="p-[2px] bg-gradient-to-b from-pink-600 to-purple-600 rounded-[6px]">
                <div className="p-[8px] px-[24px] rounded-[4px]" style={{backgroundColor}}>
                  <a 
                    href="test"
                    className="rounded-lg"
                  >
                    IR PARA O SITE
                  </a>
                </div>
              </div>
            </li>
            <li>
              <img src={cartIcon} className="w-10 h-10"/>
            </li>
          </ul>
        </nav>
      </header>
    </Layout>
    
  );
}