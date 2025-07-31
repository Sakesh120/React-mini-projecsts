
import Answer from './components/Answers'

const QuestionAnswer = ({item,index}) => {


    return (
        <>
            <div key={index + Math.random()} className={item.type == 'q' ? 'flex justify-end' : ''}>
                {
                    item.type == 'q' ?
                        <li key={index + Math.random()}
                            className=' px-3 mr-3 text-right border-1 bg-zinc-700 border-zinc-600 rounded-tl-3xl rounded-br-3xl py-2 w-fit '><Answer ans={item.text} totalResult={1} index={index} type={item.type} /></li>
                        : item.text.map((ansItem, ansIndex) => (
                            <li key={ansIndex + Math.random()} className='text-left p-[2px] '><Answer ans={ansItem} totalResult={item.text.length} index={ansIndex} type={item.type} /></li>
                        ))
                }
            </div>
        </>

    )
}

export default QuestionAnswer