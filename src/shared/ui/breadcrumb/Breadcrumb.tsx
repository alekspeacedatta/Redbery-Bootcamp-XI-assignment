import { Link, useLocation } from "react-router-dom";

const LABELS: Record<string, string> = {
  "browse-courses": "Browse",
};

interface Props {
  category?: string;
}

export const Breadcrumb = ({ category }: Props) => {
  const { pathname, state } = useLocation();
  const crumbs = pathname.split("/").filter(Boolean);

  const cameFromBrowse = state?.from === "browse";

  // courses/:id case
  if (crumbs[0] === "courses" && crumbs[1]) {
    return (
      <nav className="flex items-center gap-2">
        <Link to="/" className="text-lg font-medium leading-none text-[#666666] transition-colors duration-200 hover:text-[#4F46E5]">Home</Link>
        {cameFromBrowse && (
          <>
            <span className="text-lg font-medium leading-none text-[#666666]">›</span>
            <Link to="/browse-courses" className="text-lg font-medium leading-none text-[#666666]">Browse</Link>
          </>
        )}
        <span className="text-lg font-medium leading-none text-[#666666]">›</span>
        <span className="text-lg font-medium leading-none text-[#4F46E5] capitalize">{category}</span>
      </nav>
    );
  }

  // browse-courses and other pages
  return (
    <nav className="flex items-center gap-2">
      <Link to="/" className="text-lg font-medium leading-none text-[#666666]">Home</Link>
      {crumbs.map((crumb, index) => {
        const path = "/" + crumbs.slice(0, index + 1).join("/");
        const isLast = index === crumbs.length - 1;
        const label = LABELS[crumb] ?? crumb;

        return (
          <span key={path} className="flex items-center gap-2">
            <span className="text-lg font-medium leading-none text-[#666666]">›</span>
            {isLast ? (
              <span className="text-lg font-medium leading-none text-[#4F46E5] capitalize">{label}</span>
            ) : (
              <Link to={path} className="text-lg font-medium leading-none text-[#666666] capitalize">{label}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};