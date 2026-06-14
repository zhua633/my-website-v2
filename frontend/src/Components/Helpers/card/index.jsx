import React from 'react';

const externalIcon = (
  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

const Card = ({ title, description, link, imglink, tags, demo, links }) => {
  const titleHref = demo || links?.frontend || link;
  const isFullStack = Boolean(demo || links?.frontend || links?.backend);

  return (
    <div className="group flex flex-1 flex-col rounded-lg border border-white/20 bg-white/15 p-5 backdrop-blur-md transition-all duration-300 hover:border-indigo-400/40 hover:bg-white/20">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/20 transition-colors group-hover:bg-white/15">
          <img className="h-4 w-4" src={imglink} alt="" />
        </div>
        <a
          href={titleHref}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-indigo-300"
        >
          <h5 className="text-base font-semibold tracking-tight text-white">{title}</h5>
        </a>
      </div>

      {tags?.length > 0 && (
        <ul aria-label="Technologies used" className="mb-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-xs font-medium text-gray-100"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-100">{description}</p>

      <div className={`flex flex-wrap items-center gap-2 ${isFullStack ? 'justify-between' : 'justify-end'}`}>
        {isFullStack ? (
          <>
            <div className="flex flex-wrap gap-3">
              {links?.frontend && (
                <a
                  href={links.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-gray-200 transition-colors hover:text-indigo-200"
                >
                  Frontend
                  {externalIcon}
                </a>
              )}
              {links?.backend && (
                <a
                  href={links.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-gray-200 transition-colors hover:text-indigo-200"
                >
                  Backend
                  {externalIcon}
                </a>
              )}
            </div>
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md bg-indigo-500/90 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
              >
                Live demo
                {externalIcon}
              </a>
            )}
          </>
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-indigo-500/90 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
          >
            View project
            <svg
              aria-hidden="true"
              className="h-3 w-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
