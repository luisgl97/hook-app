
import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {

  const {counter, increment} = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote} = (!isLoading && data.length>0) && data[0];

  const onNext = () => {
    increment(1)
  }

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {isLoading ? (
        <LoadingQuote />
      ) : (
        <Quote author={ author} quote={quote}/>
      )}

      <button onClick={onNext} disabled={isLoading} className="btn btn-primary" >
        Next quote
      </button>
    </>
  );
};
