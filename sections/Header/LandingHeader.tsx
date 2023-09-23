import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";

export interface navItem {
  item: string;
  href: string;
}

export interface Props {
    items: navItem[];
    headerLogo?: LiveImage;
}
  
export default function LandingHeader({ items, headerLogo }: Props) {
  return (
    <header className="h-[96px] p-[35px]">
      <img 
        src={headerLogo} 
        className="w-[152px] h-[31px] float-left"
      />
      <nav>
        <ul className="flex gap-8 float-right">
          {items.map(
            navItem => <li>
              <a href={navItem.href}>
                {navItem.item}
              </a>
            </li>
          )}
          <li>
            <a href="test">
              IR PARA O SITE
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}