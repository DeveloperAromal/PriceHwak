import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faHeart, faThumbsUp, faStream, faFireFlameCurved, faHistory, faFilter,  faCog, faLightbulb, faUser } from "@fortawesome/free-solid-svg-icons";

interface NavicoProps {
  href: string;
  label: string;
  icon: any; // Adjust the type of icon prop
}

export default function Sidebar() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="sidebar">
      <div
        className="container bg-black w-14 absolute z-50 h-screen lg:block hidden border-r border-gray-500 hover:w-44 transition-transform duration-1000"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div>
          <h1>
            {" "}
            <div className="flex items-center justify-center">
              <Image
                src="/assets/logo.png"
                alt="logo"
                width={55}
                height={55}
                className="hidden lg:block pt-4"
              />
            </div>
          </h1>
          <div className="flex items-center justify-center pr-4 pt-10">
            <div>
              <NavicoBlock
                href="#"
                icon={faBell}
                label="Notification"
                hovered={hovered}
                
              />
              <NavicoBlock
                href="#"
                icon={faHeart}
                label="Favourite"
                hovered={hovered}
              />
              <NavicoBlock
                href="#"
                icon={faThumbsUp}
                label="Whishlist"
                hovered={hovered}
              />
              <NavicoBlock
                href="#"
                icon={faStream}
                label="Tracking"
                hovered={hovered}
              />
              <NavicoBlock
                href="#"
                icon={faFireFlameCurved}
                label="Trending"
                hovered={hovered}
              />
            </div>
          </div>
          <hr className="bg-teal-500" />
          <div className="flex items-center justify-center pt-6">
            <div>
              <NavicoBlock
                href="/dashboard/dash/history"
                icon={faHistory}
                label="History"
                hovered={hovered}
              />
              <NavicoBlock
                href="#"
                icon={faFilter}
                label="Filter"
                hovered={hovered}
              />
              <NavicoBlock
                href="#"
                icon={faLightbulb}
                label="Recommended"
                hovered={hovered}
              />
            </div>
          </div>
          <hr className="bg-teal-500" />
          <div className="px-6 pt-14">
            <div>
              <NavicoBlock
                href="/dashboard/dash/account"
                icon={faUser}
                label="Account"
                hovered={hovered}
              />
              <NavicoBlock
                href="#"
                icon={faCog}
                label="Settings"
                hovered={hovered}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NavicoBlock({
  href,
  label,
  icon,
  hovered,
}: NavicoProps & { hovered: boolean }) {
  return (
    <div>
      <Link href={href}>
        <div className="flex gap-2 hover:text-teal-500">
          <Navico icon={icon} href={""} label={""} /> {/* Pass the icon prop */}
          {hovered && <span className="hover:text-teal-500">{label}</span>}
        </div>
      </Link>
    </div>
  );
}

function Navico({ icon }: NavicoProps) {
  return (
    <div className="pb-6">
      <FontAwesomeIcon icon={icon} className="hover:text-teal-500"/>
    </div>
  );
}
