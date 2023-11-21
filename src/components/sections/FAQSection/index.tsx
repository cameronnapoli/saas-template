import classNames from 'classnames';
import React, { useState } from 'react';

import Section from '../Section';

import styles from './styles.module.scss';

interface Props {
  maxWidth?: 'normal' | 'small';
  size?: 'normal' | 'small';
}

const FAQSection: React.FunctionComponent<Props> = ({
  maxWidth,
  size,
}) => {
  return (
    <Section
      maxWidth={maxWidth}
      size={size}
    >
      <h2 className={styles.title}>
        FAQ
      </h2>
      <FAQ
        faqList={[
          {
            question: 'How much does it cost?',
            answer: 'The monthly subscription is $13.99/month, and the annual subscription is 40% off at $99/year. You can try the free trial before purchasing.',
          },
          {
            question: 'Can I try it for free?',
            answer: 'Yes! You can try out the free trial before purchasing.',
          },
          {
            question: 'What if I don\'t like it?',
            answer: 'We have a 30 day money back guarantee. If you don\'t like it, you can get a full refund within 30 days of purchase.',
          },
        ]}
      />
    </Section>
  );
};

const FAQItem = ({
  question,
  answer,
  // idx,
}: { question: string | JSX.Element, answer: string | JSX.Element, idx: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={classNames(styles.item)}
      onClick={() => setIsOpen((p) => !p)}
    >
      <div className={styles.titleContainer}>
        <h3 className={styles.question}>
          {question}
        </h3>
        <svg
          width="32"
          height="32"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classNames(styles.icon)}
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <path d="M6.39478 9.14038L12.3948 15.1404L18.3948 9.14038" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {isOpen && <p className={styles.answer}>{answer}</p>}
    </div>
  );
};

const FAQ = ({
  faqList,
}: { faqList: { question: string | JSX.Element, answer: string | JSX.Element }[] }) => (
  <div>
    {faqList.map((faq, i) => (
      <FAQItem
        key={i}
        question={faq.question}
        answer={faq.answer}
        idx={i}
      />
    ))}
  </div>
);

export default FAQSection;
