import { useState, useEffect } from "react";
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState('');

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };

      const updatedAllArticles = [newArticle, ...allArticles];

      setArticle(newArticle);
      setAllArticles(updatedAllArticles);

      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  };

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000)
  }
  return (
    <section className="mt-16 w-ful max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          action=""
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="url"
            placeholder="Enter a url"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          ></button>
        </form>
        {/* browse url history */}
        <div className="flex flex-col gap-1 max-h-30 overflow-y-auto">
          {allArticles.map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticles(item)}
              className="link_card"
            >
              <div className="copy_btn">
                <p className="flex-1 font-satoshi text-blue-700 font-medium text-small">
                  {item.url}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*Display Result */}
      <div className="my-10 max-w-full flex justify-center items-center" onClick={() => handleCopy(item.url)}>
        {isFetching ? (
          <p className="font-inter font-bold text-black text-center">Loading</p>
        ) : error ? (
          <p className="font-inter font-bold text-black text-center">
            Well,that wasn't suppose to happen... <br />{" "}
            <span className="font-satoshi font-normal text-red-700">
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                {" "}
                Article <span className="blue-gradient">Summary</span>
              </h2>
              <div className="summary_box">
                <p className="font-inter font-medium text-xm text-gray-700">{article.summary}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Demo;
