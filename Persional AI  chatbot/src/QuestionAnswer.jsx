import Answer from "./components/Answers";

const QuestionAnswer = ({ item, index }) => {
  return (
    <>
      <div
        key={index + Math.random()}
        className={`${item.type == "q" ? "flex justify-end mb-4" : "mb-4"}`}
      >
        {item.type == "q" ? (
          <li
            key={index + Math.random()}
            className="px-3 mr-3 text-right border-1 dark:bg-zinc-700 dark:border-zinc-600 rounded-tl-3xl rounded-br-3xl py-2 max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl w-fit dark:text-white text-gray-700 bg-amber-50 border-gray-700 break-words"
          >
            <Answer
              ans={item.text}
              totalResult={1}
              index={index}
              type={item.type}
            />
          </li>
        ) : (
          item.text.map((ansItem, ansIndex) => (
            <li
              key={ansIndex + Math.random()}
              className="text-left p-2 md:p-[2px] break-words"
            >
              <Answer
                ans={ansItem}
                totalResult={item.text.length}
                index={ansIndex}
                type={item.type}
              />
            </li>
          ))
        )}
      </div>
    </>
  );
};

export default QuestionAnswer;
