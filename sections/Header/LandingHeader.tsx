export interface navItem {
  item: string;
  href: string;
}

export interface Props {
    items: navItem[];
}
  
export default function LandingHeader({ items }: Props) {
  return (
    <div>
      <nav>
        <ul>
          {items.map(navItem => <li>
            <a href={navItem.href}>
              {navItem.item}
            </a>
          </li>)}
        </ul>
      </nav>
    </div>
  );
}