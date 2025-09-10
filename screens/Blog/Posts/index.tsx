"use client";

import React from 'react';
import styles from './posts.module.css';
import cn from 'classnames';
import { Article } from '@/components/Cards';

interface Post {
  id: string;
  type: string;
  title: string;
  date: string;
  image: string;
  slug: string;
  [key: string]: any;
}

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  const [activeTab, setActiveTab] = React.useState("all");
  const navRefs = React.useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !navRefs.current.includes(el)) {
      navRefs.current.push(el);
    }
  };

  const tabs = ["all", "design", "development", "technology", "branding"];

  const handleClickTab = (tab: string) => {
    setActiveTab(tab);

    const tabRef = navRefs.current.find(
      (el) => el.textContent?.toLowerCase() === tab
    );

    if (tabRef) {
      tabRef.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const filteredPosts =
    activeTab === "all"
      ? posts
      : posts.filter((article: Post) => article.type === activeTab);

  return (
    <section className={cn("section", styles.section)}>
      <div className={styles.container}>
        <div className={styles.tabs}>
          {tabs.map((tab, index) => (
            <div
              ref={addToRefs}
              data-url={tab}
              key={index}
              className={cn("btn-2", styles.tab, {
                [styles.active]: activeTab === tab,
              })}
              onClick={() => handleClickTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </div>
          ))}
        </div>

        <div className={styles.articles}>
          {filteredPosts.map((article: Post) => (
            <Article key={article.id} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}
