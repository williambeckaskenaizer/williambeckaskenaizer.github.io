import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const crumbs = [
  { name: "Hello!", to: "hello" },
  { name: "About Me!", to: "about" },
  { name: "Projects!", to: "projects" },
];

export default function TopBar() {
  return (
    <div className="h-screen w-24 fixed">
      <div className="text-left bg-red-00 justify-center h-full w-full flex flex-col bg-zinc-000">
        {crumbs.map((crumb) => (
          <Link
            spy={false}
            smooth={true}
            to={crumb.to}
            className="bg-red-00 text-left ml-2 mt-2 w-24 bg-zinc-00 rounded-xl rounded-b-none"
          >
            {crumb.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
