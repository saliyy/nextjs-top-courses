import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import topApi from "../../api";
import { MenuItem } from "../../interfaces/menu.interface";
import { TopPageModel } from "../../interfaces/page.interface";
import { ProductModel } from "../../interfaces/product.interface";
import { WithLayout } from "../../layout/HOC/WithLayout";


const firstCategory = 0;

export function Course({ menu, firstCategory, page, products }: CourseProps): JSX.Element {

  return (
    <div>
		{ products && products.length }
     </div>
  );
}

export default WithLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
	const { data: menu } = await topApi.post<MenuItem[]>('api/top-page/find', {
		firstCategory
	});

	return {
		paths: menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias)),
		fallback: true
	};
	
};


export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  
  if (!params) {
	return {
		notFound: true
	};
  }

  const { data: menu } = await topApi.post<MenuItem[]>('api/top-page/find', {
    firstCategory
  });

  const { data: page } = await topApi.get<TopPageModel>('api/top-page/byAlias/' + params.alias);

  const { data: products } = await topApi.post<ProductModel[]>('api/product/find', {
	category: page.category,
	limit: 10
  });
  
  return {
    props: {
    menu,
		firstCategory,
		page,
		products,
    }
  };
};


export interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number;
  page: TopPageModel,
  products: ProductModel[]
}




