import React, { useEffect, useState } from "react";
import { checkHeading, replaceHeadingStars } from "../Helper";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";

const Answer = ({ ans, index, totalResult, type }) => {
  const [heading, setHeading] = useState(false);
  const [answer, setAnswer] = useState(ans);

  useEffect(() => {
    if (checkHeading(ans)) {
      setHeading(true);
      setAnswer(replaceHeadingStars(ans));
    }
  }, [ans]);

  const components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          {...props}
          style={vscDarkPlus}
          language={match[1]}
          PreTag="div"
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code
          {...props}
          className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-sm"
        >
          {children}
        </code>
      );
    },
  };

  return (
    <>
      {index === 0 && totalResult > 1 ? (
        <span className="pt-1 block font-bold text-xl dark:text-white text-gray-800">
          {answer}
        </span>
      ) : heading ? (
        <span className="pt-1 block font-bold text-lg dark:text-white text-gray-900">
          {answer}
        </span>
      ) : (
        <span className={type === "q" ? "" : "pl-5"}>
          <ReactMarkdown components={components}>{answer}</ReactMarkdown>
        </span>
      )}
    </>
  );
};

export default Answer;
