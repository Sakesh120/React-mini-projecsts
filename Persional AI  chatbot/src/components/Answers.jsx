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
          className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded text-sm font-mono"
        >
          {children}
        </code>
      );
    },
  };

  return (
    <>
      {index === 0 && totalResult > 1 ? (
        <div className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
          {answer}
        </div>
      ) : heading ? (
        <div className="font-semibold text-base text-gray-900 dark:text-white mb-2">
          {answer}
        </div>
      ) : (
        <div
          className={
            type === "q" ? "text-white" : "text-gray-900 dark:text-white"
          }
        >
          <ReactMarkdown components={components}>{answer}</ReactMarkdown>
        </div>
      )}
    </>
  );
};

export default Answer;
