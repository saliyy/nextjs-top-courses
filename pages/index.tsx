import { GetStaticProps } from "next";
import { useState } from "react";
import topApi from "../api";
import { Button } from "../components/Button/Button";
import { Htag } from "../components/Htag/Htag";
import { Paragraph } from "../components/Paragraph/Paragraph";
import { Raiting } from "../components/Raiting/Raiting";
import { Tag } from "../components/Tag/Tag";
import { MenuItem } from "../interfaces/menu.interface";
import { WithLayout } from "../layout/HOC/WithLayout";

export function Home({ menu, firstCategory }: HomeProps): JSX.Element {

  const [raiting, setRaiting] = useState(4);

  return (
    <div>
      <Htag tag='h1'>Заголовок</Htag>
      <Button arrow="down" appearance="primary">
        Привет!
      </Button>
      <Paragraph>
        Hello!
      </Paragraph>
      <Tag size="small" appereance="ghost">
        Hello tag!
      </Tag>
      <Tag size="small" appereance="primary">
        Hello tag!
      </Tag>
      <Tag size="small" appereance="success">
        Hello tag!
      </Tag>
      <Tag size="small" appereance="danger">
        Hello tag!
      </Tag>
      <br />
      <Raiting raiting={raiting} setRaiting={setRaiting} isEditable={true}  />
      <ul>
        { menu && menu.map(m => (<li key={m._id.secondCategory}>{ m._id.secondCategory }</li>)) }
      </ul>
    </div>
  );
}

export default WithLayout(Home);


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;

  const { data: menu } = await topApi.post<MenuItem[]>('api/top-page/find', {
    firstCategory
  });
  
  return {
    props: {
      menu,
      firstCategory
    }
  };
};


export interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number;
}




