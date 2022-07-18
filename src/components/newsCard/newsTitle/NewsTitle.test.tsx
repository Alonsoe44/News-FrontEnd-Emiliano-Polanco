import { render, screen } from "@testing-library/react";
import NewsTitle from "./NewsTitle";

describe("Given a Newstitle component", () => {
  describe("When it's rendered passing 'Amazing super title'", () => {
    test("Then it should idsplay a Heading with that text", () => {
      const text = "Amazing super title";
      render(<NewsTitle text={text} />);

      const foundHeading = screen.getByRole("heading", {
        name: /amazing super title/i,
      });

      expect(foundHeading).toBeInTheDocument();
    });
  });
});
