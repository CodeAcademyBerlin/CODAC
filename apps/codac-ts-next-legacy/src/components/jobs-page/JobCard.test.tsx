import { render, screen } from "@testing-library/react";
import { JobPost } from "codac-server-graphql";

import JobsCard from "./JobsCard";

describe("Card", () => {
  test("must render properly", () => {
    const job: JobPost = {
      company: "Code Academy Berlin",
      createdAt: new Date(),
      description: "On-site Coding Bootcamp",
      position: "mentor",
      publishedAt: new Date(),
      updatedAt: new Date(),
      url: "https://www.codeacademyberlin.com/",
    };

    render(<JobsCard job={job} />);

    const link = screen.getByRole("link");
    const company = screen.getByText(job.company!);
    const description = screen.getByText(job.description!);

    expect(company).toHaveTextContent(job.company!);
    expect(description).toBeInTheDocument();
    expect(link).toHaveTextContent("Apply");
    expect(link).toHaveProperty("href", `${job.url}`);
  });
});
