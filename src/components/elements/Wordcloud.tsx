import { FunctionComponent, useMemo } from "react";
import ReactWordcloud from "react-wordcloud";
import { keywords } from "../../utils/content";
import { colors } from "../../utils/theme";
import Section from "../layout/Section";

export const Wordcloud: FunctionComponent = () => {
  const words = useMemo(() => {
    const temp: WordcloudWordType[] = [];
    keywords.forEach((kw) => {
      const record = temp.findIndex(
        (element) => element.text.toLowerCase() === kw.toLowerCase()
      );
      if (record !== -1) temp[record].value++;
      else temp.push({ text: kw, value: 1 });
    });
    return temp;
  }, []);
  return (
    <Section>
      <ReactWordcloud
        words={words}
        options={{
          rotations: 2,
          rotationAngles: [-90, 0],
          fontSizes: [20, 60],
          padding: 1,
          spiral: "rectangular",
          enableTooltip: false,
          colors: [colors.themeDark, colors.yellow],
        }}
      />
    </Section>
  );
};

type WordcloudWordType = { text: string; value: number };
