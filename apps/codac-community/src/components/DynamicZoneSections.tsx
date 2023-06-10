import type { PageContentSectionsDynamicZone } from "codac-graphql-types";
import { SectionHeader, SectionRichText } from "codac-ui";
import type { FC } from "react";

import Header from "./dynamic-components/header";
import Markdown from "./dynamic-components/markdown";

// Map Strapi sections to dynamicZone components
const contentSectionsList = {
  ComponentSectionsHeader: SectionHeader,
  ComponentSectionsRichText: SectionRichText,
};

type contentSectionsType = typeof contentSectionsList;

// Display a dynamicZone individually
const Zone = ({ data }: { data: PageContentSectionsDynamicZone }) => {
  console.log("data", data);
  // Prepare the component
  const DynamicComponent: FC<{ data: any }> =
    contentSectionsList[data.__typename as keyof contentSectionsType];

  if (!DynamicComponent) {
    return null;
  }

  // Display the dynamicZone
  return <DynamicComponent data={data} />;
};

// Display the list of dynamicZones
const DynamicZoneSections = ({
  contentSections,
}: {
  contentSections: PageContentSectionsDynamicZone[];
}) => {
  return (
    <>
      {contentSections.map((component, index) => (
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        <Zone data={component} key={`${component.__typename}_${index}`} />
      ))}
    </>
  );
};

export default DynamicZoneSections;
