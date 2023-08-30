import { Meta, StoryObj } from "@storybook/react";
import ArticleCard from "./ArticleCard";
import { Article } from "../../models/ArticleInterface";

const meta = {
  title: "Components/ArticleCard",
  component: ArticleCard,
} satisfies Meta<typeof ArticleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockArticle: Article = {
  source: {
    id: "business-insider",
    name: "Business Insider",
  },
  author: "Matthew Fox",
  title:
    "Bitcoin plunges more than 10% after Elon Musk's SpaceX reportedly sold the cryptocurrency",
  description:
    "The Wall Street Journal reported that SpaceX wrote down the value of its bitcoin holdings by a total of $373 million and has sold the cryptocurrency.",
  url: "https://markets.businessinsider.com/news/currencies/bitcoin-price-plunge-elon-musks-spacex-sold-373-million-stake-2023-8",
  urlToImage:
    "https://i.insider.com/64df7ff3b698ac0019dc43a3?width=1200&format=jpeg",
  publishedAt: "2023-08-18T15:14:49Z",
  content:
    "Bitcoin plunged about 10% after it was revealed that SpaceX sold the cryptocurrency. The Wall Street Journal reported that SpaceX wrote down the value of bitcoin it owns by $373 million",
};

export const ArticleCardStory: Story = {
  args: {
    article: {
      source: mockArticle.source,
      title: mockArticle.title,

      url: mockArticle.url,
      urlToImage: mockArticle.urlToImage,
      description: mockArticle.description,
      publishedAt: "Friday Jun 25, 2021",
      content: mockArticle.content,
    },
  },
};
