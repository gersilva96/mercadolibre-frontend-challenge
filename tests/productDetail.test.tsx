import { render, RenderResult } from "@testing-library/react";
import { DescriptionContainer } from "../src/components/pages/ProductDetail/ProductCard/DescriptionContainer/DescriptionContainer";
import { DetailContainer } from "../src/components/pages/ProductDetail/ProductCard/DetailContainer/DetailContainer";
import { t, tk } from "../src/translations/i18n";
import { mockedProduct } from "./__mocks__/product";
import "@testing-library/jest-dom/extend-expect";

describe("The DetailContainer component with mockedProduct", () => {
  let detailContainerComponent: RenderResult;
  const tkDetailContainer = tk.page.productDetail.component.detailContainer;
  beforeEach(() => {
    detailContainerComponent = render(
      <DetailContainer product={mockedProduct} />
    );
  });

  it("should render correctly", () => {
    expect(detailContainerComponent.container).toBeInTheDocument();
  });

  it("should have an h1 tag defined", () => {
    const h1 = detailContainerComponent.container.querySelector("h1");
    expect(h1).toBeDefined();
  });

  it(`should have an h1 tag with the text "${mockedProduct.title}" inside`, () => {
    const h1 = detailContainerComponent.container.querySelector("h1");
    expect(h1).toHaveTextContent(mockedProduct.title);
  });

  it(`should have the text "${t(
    tkDetailContainer.productSubtitle.soldQuantity,
    {
      count: mockedProduct.sold_quantity
    }
  )}" inside`, () => {
    expect(detailContainerComponent.container).toHaveTextContent(
      `${t(tkDetailContainer.productSubtitle.soldQuantity, {
        count: mockedProduct.sold_quantity
      })}`
    );
  });
});

describe("The DescriptionContainer component with mockedProduct", () => {
  let descriptionContainerComponent: RenderResult;
  const tkDescriptionContainer =
    tk.page.productDetail.component.descriptionContainer;
  beforeEach(() => {
    descriptionContainerComponent = render(
      <DescriptionContainer product={mockedProduct} />
    );
  });

  it("should render correctly", () => {
    expect(descriptionContainerComponent.container).toBeInTheDocument();
  });

  it("should have an h2 tag defined", () => {
    const h2 = descriptionContainerComponent.container.querySelector("h2");
    expect(h2).toBeDefined();
  });

  it(`should have an h2 tag with the text "${t(
    tkDescriptionContainer.title
  )}" inside`, () => {
    const h2 = descriptionContainerComponent.container.querySelector("h2");
    expect(h2).toHaveTextContent(t(tkDescriptionContainer.title));
  });

  it("should have the mockedProduct descripton text inside", () => {
    expect(descriptionContainerComponent.container).toHaveTextContent(
      mockedProduct.description ?? "" // Just for types reason
    );
  });
});
