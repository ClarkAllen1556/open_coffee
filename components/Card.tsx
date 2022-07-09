import { ReactNode } from 'react';

interface Props {
  children?: {
    cardTitle?: ReactNode;
    content?: ReactNode;
    footer?: ReactNode;
  };
}

export default function Card({ children }: Props) {
  const cardTitle = children?.cardTitle;
  const content = children?.content;
  const footer = children?.footer;

  return (
    <div className="bg-sol-white-1 dark:bg-sol-black-1 rounded mb-2 p-2 border-2 border-sol-blue-1 shadow-md">
      {cardTitle && <div> {cardTitle} </div>}

      {content && <div> {content} </div>}

      {footer && <div className="mt-2"> {footer} </div>}
    </div>
  );
}