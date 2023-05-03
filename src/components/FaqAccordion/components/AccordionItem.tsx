import { Item, Header, Trigger, Content } from "@radix-ui/react-accordion";
import { AiOutlinePlus } from "react-icons/ai";

type Faq = {
  value: string;
  header: string;
  content: React.ReactNode;
};

const AccordionItem: React.FC<Faq> = ({ value, header, content }) => {
  return (
    <Item value={value}>
      <Header>
        <Trigger className="mb-4 flex w-full border-b border-violet-400 py-4 text-start text-xl text-violet-200">
          {header}
          <AiOutlinePlus size={30} className="ml-auto text-violet-200" />
        </Trigger>
      </Header>
      <Content className="accordion-content text-xl font-light leading-7 text-white">
        {content}
      </Content>
    </Item>
  );
};

export default AccordionItem;
