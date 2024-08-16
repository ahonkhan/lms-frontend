import React from "react";
import { SectionTitle } from "../../../components/typography/Typography";
import { TimelineItemDefault } from "../../../components/timeline/TimelineItem";

const TeachingProcess = () => {
  const timelineData = [
    {
      title: "আকর্ষণীয় রেকর্ডেড ও লাইভ সাপোর্ট",
      body: "আপনি পাচ্ছেন রেকর্ডেড ক্লাস যাতে আপনি যেকোনো সময় ক্লাস দেখতে পারেন এবং কোনো সমস্যা সমাধানের জন্য লাইভ সাপোর্ট",
      count: "১",
    },
    {
      title: "পর্যাপ্ত অ্যাসাইনমেন্ট ও কুইজ",
      body: "আপনাকে মডিউল বেইসড অ্যাসাইনমেন্ট দেওয়া হবে এবং কুইজ দেওয়া হবে যাতে আমরা আপনার দক্ষতা যাচাই করে আপনার গতিপথ আগ্রসর করতে পারে।",
      count: "২",
    },
    {
      title: "কন্টেস্ট",
      body: "আপনাকে আমরা প্রতি মাসে একটা করে কন্টেস্ট দিবো এবং যে উইনার হবে তাকে পুরস্কৃত করা হবে!",
      count: "৩",
    },
    {
      title: "ইন্টার্ন ও জব সুবিধা",
      body: "আপনি সফল ভাবে কোর্স শেষ করতে পারলে আমাদের স্পেশাল ইন্টেরভিউ ক্র্যাক কোর্স পেয়ে যাবেন যা আপনাকে জব পেতে সাহায্য করবে!",
      count: "৪",
    },
    {
      title: "মোটিভেশন",
      body: "আপনি থেমে গেলে আপনাকে মটিভেইট করার জন্য থাকছে আমাদের সুদক্ষ টিম",
      count: "৫",
    },
  ];
  return (
    <section id="teaching-process">
      <div className="site-container mt-section">
        <SectionTitle>আমরা যেভাবে শেখাই</SectionTitle>
        <div className="timeline-area mt-section">
          <div className="timeline-wrapper relative">
            <div className="absolute h-full w-[10px] bg-primary z-[5] left-0 sm:left-[50%] rounded-t-3xl rounded-b-3xl -translate-x-[50%]"></div>
            <div className="flex flex-col sm:block gap-y-3">
              {timelineData.map((item, index) => (
                <TimelineItemDefault
                  start={(index + 1) % 2 !== 0}
                  key={index}
                  count={item.count}
                  title={item.title}
                  body={item.body}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingProcess;
