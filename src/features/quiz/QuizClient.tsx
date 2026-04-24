"use client";

import { useState } from "react";
import { AnswerRenderer } from "@/features/questions/ui/AnswerRenderer";
import type { QuizItem, QuizMode } from "./types";
import * as styles from "./QuizClient.css";

interface QuizClientProps {
  items: QuizItem[];
  mode: QuizMode;
}

// 객관식/주관식 퀴즈 진행 UI
export function QuizClient({ items, mode }: QuizClientProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  const isCompleted = currentIndex >= items.length;
  const currentItem = !isCompleted ? items[currentIndex] : null;

  const handleSelectOption = (option: string) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(option);
    }
  };

  const handleReveal = () => {
    setIsRevealed(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
    setSelectedAnswer(null);
    setIsRevealed(false);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsRevealed(false);
  };

  if (isCompleted || !currentItem) {
    return (
      <div className={styles.container}>
        <div className={styles.completedSection}>
          <div className={styles.completedTitle}>🎉 완료!</div>
          <div className={styles.completedMessage}>
            {items.length}개의 문제를 모두 풀었어요.<br />
            다시 한 번 도전해 보세요!
          </div>
          <button className={styles.restartButton} onClick={handleRestart}>
            처음부터 다시
          </button>
        </div>
      </div>
    );
  }

  const isCorrect = selectedAnswer === currentItem.correctAnswer;
  const canAdvance =
    mode === "subjective" ? isRevealed : selectedAnswer !== null;

  return (
    <div className={styles.container}>
      <div className={styles.progress}>
        문제 {currentIndex + 1} / {items.length}
      </div>

      <div className={styles.questionSection}>
        <h2 className={styles.questionTitle}>{currentItem.question.title}</h2>

        {mode === "multiple" && (
          <div className={styles.optionsContainer}>
            {currentItem.options.map((option, idx) => (
              <button
                key={idx}
                className={
                  selectedAnswer === null
                    ? styles.optionButton.default
                    : selectedAnswer === option
                      ? isCorrect
                        ? styles.optionButton.correct
                        : styles.optionButton.wrong
                      : option === currentItem.correctAnswer
                        ? styles.optionButton.correct
                        : styles.optionButton.default
                }
                onClick={() => handleSelectOption(option)}
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {mode === "subjective" && !isRevealed && (
          <button className={styles.revealButton} onClick={handleReveal}>
            정답 확인
          </button>
        )}

        {mode === "subjective" && isRevealed && (
          <div className={styles.answerSection}>
            <div className={styles.answerLabel}>정답</div>
            <AnswerRenderer content={currentItem.question.answer} />
          </div>
        )}
      </div>

      <button
        className={styles.nextButton}
        onClick={handleNext}
        disabled={!canAdvance}
      >
        {currentIndex === items.length - 1 ? "완료" : "다음 문제"}
      </button>
    </div>
  );
}
