import type { ComponentSectionsRichText } from "codac-server-graphql";
import ReactMarkdown from "react-markdown";
interface Props {
  data: ComponentSectionsRichText;
}

const Header = ({ data }: Props) => {
  return <ReactMarkdown>{data.content || ""}</ReactMarkdown>;
};

export default Header;
