import { FunctionComponent, useEffect, useMemo, useState } from "react";
import ReactWordcloud from "react-wordcloud";
import { keywords } from "../../utils/content";
import { colors } from "../../utils/theme";
import Section from "../layout/Section";
import type { Word } from "react-wordcloud";
import { WordcloudPlaceholder } from "./WordcloudPlaceholder";
import { isMobile } from "react-device-detect";

export const Wordcloud: FunctionComponent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [show]);
  const words = useMemo(() => {
    const temp: Word[] = [];
    keywords.forEach((kw) => {
      const record = temp.findIndex(
        (element) => element.text.toLowerCase() === kw.toLowerCase()
      );
      if (record !== -1) temp[record].value++;
      else temp.push({ text: kw, value: 1 });
    });
    return temp;
  }, []);

  if (isMobile) {
    return null;
  }

  return show ? (
    <Section>
      <ReactWordcloud
        words={words}
        options={{
          fontFamily: "Inter",
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
  ) : (
    <Section>
      <WordcloudPlaceholder>Szófelő betöltése...</WordcloudPlaceholder>
    </Section>
  );
};
