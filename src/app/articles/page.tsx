import React from "react";
import ArticleItem from "@/app/articles/articleItem";
import { Article, Product } from "@/utils/types";

const page = async () => {
  const respone = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const articles: Article[] = await respone.json();

  return (
    <section className="m-5    ">
      <div className="flex items-center justify-center flex-wrap gap-7">
        {" "}
        {/* {articles.map((e) => (
          <ArticleItem article={e} key={e.id} />
        ))} */}
      </div>
    </section>
  );
};

export default page;
