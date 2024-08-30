import Script from "next/script";
import React from "react";
let jsonLd = {
  "@context": "",
  "@type": "",
  headline: "Cơn Mưa Mèn Mén",
  description: "Mô tả ngắn gọn về nội dung bài viết.",
  author: {
    "@type": "Person",
    name: "Nguyễn Văn A",
  },
  datePublished: "2024-08-29",
  title: "hello11111111111",
};
export default function page() {
  return (
    <>
    <section>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      ></Script>
      hhhhhh  
    </section>
    </>
  );
}
