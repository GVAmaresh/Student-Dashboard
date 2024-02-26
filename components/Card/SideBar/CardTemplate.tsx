import Link from "next/link";
import { IconType } from "react-icons";
export default function CardTemplate({
  link,
  textContent,
  logo,
  onClick,
  isSelected,
}: {
  link: string;
  textContent: string;
  logo: IconType;
  onClick: () => void;
  isSelected: boolean;
}) {
  const LogoComponent = logo;
  return (
    <>
      <Link href={link} key="1">
        <div
          className={`cardTemplate ${isSelected ? "bg-blue-800" : ""}`}
          onClick={onClick}
        >
          <div className="text-center">
            {" "}
            <LogoComponent size={30} />
          </div>
          <div className="text-center">{textContent}</div>
        </div>
      </Link>
    </>
  );
}
