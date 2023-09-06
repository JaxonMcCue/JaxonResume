import { Routes, Route, Outlet, Link } from "react-router-dom";
import { EnvelopeIcon, LinkIcon } from "@heroicons/react/24/outline";
import Home from "./Home";
import Portfolio from "./Portfolio";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  const email = () => {
    return "jaxonmccue" + 718 + "@" + "gmail" + ".com";
  };

  return (
    <div>
      <div className="p-5 pr-7 pb-0 lg:pl-10 bg-cyan-100">
        <Link to="/" className="font-bold text-3xl">
          Jaxon McCue
        </Link>
        <div className="pb-4 xl:grid grid-cols-5">
          <div className="col-span-2">
            <p className="italic">Software Developer</p>
          </div>

          <div className="grid grid-flow-col justify-start">
            <EnvelopeIcon className="h-7 w-7 m-2" />
            <div>
              <p className="font-bold">Email</p>
              <a
                href={`mailto:${email()}`}
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                {email()}
              </a>
            </div>
          </div>

          <LinkingSet link="https://github.com/JaxonMcCue" linkType="Github" />
          <LinkingSet
            link="https://www.linkedin.com/in/jaxon-mccue-268b02255/"
            linkType="LinkedIn"
          />
          <Link to="/portfolio" className="font-bold text-lg col-span-3 pt-2">
            Portfolio
          </Link>
          <br />
          <a
            href="Resume-JaxonMcCue.docx"
            className="text-right font-bold text-lg pt-2"
            download={true}
          >
            Download Resume
          </a>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

const LinkingSet = ({ link, linkType }) => {
  return (
    <div className="grid grid-flow-col justify-start">
      <LinkIcon className="h-7 w-7 m-2" />
      <div>
        <p className="font-bold">{linkType}</p>
        <a
          href={link}
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          {link}
        </a>
      </div>
    </div>
  );
};
