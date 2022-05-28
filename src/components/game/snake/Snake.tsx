import React from "react";
import { Snake } from "../../../game/snake/Snake";
import { SnakeSection } from "../../../game/snake/SnakeSection";
import { SnakeSectionComponent } from "./SnakeSection";

export interface SnakeComponentProps {
  snake: Snake;
}

export const SnakeComponent = ({ snake }: SnakeComponentProps): JSX.Element => {
  const getSections = (): SnakeSection[] => {
    const sections: SnakeSection[] = [snake.head];

    for (let i = 1; i < snake.length; i++) {
      const lastSection = sections[i - 1];
      if (lastSection && lastSection.next) {
        sections.push(lastSection.next);
      }
    }
    return sections;
  };

  return (
    <>
      {getSections().map((section, i) => {
        return <SnakeSectionComponent key={i} snakeSection={section} />;
      })}
    </>
  );
};
