import Image from "next/image";
import React from "react";

import C from "@assets/Logos/c.svg";
import CPP from "@assets/Logos/c++.svg";
import CSharp from "@assets/Logos/csharp.svg";
import CSS from "@assets/Logos/css.svg";
import GO from "@assets/Logos/go.svg";
import HTML from "@assets/Logos/html.svg";
import JAVA from "@assets/Logos/java.svg";
import JS from "@assets/Logos/javascript.svg";
import PYTHON from "@assets/Logos/python.svg";
import RUBY from "@assets/Logos/ruby.svg";
import RUST from "@assets/Logos/rust.svg";

export default function LanguageTag({ language }) {
  const logoObj = {
    c: C,
    cpp: CPP,
    "c#": CSharp,
    css: CSS,
    go: GO,
    html: HTML,
    java: JAVA,
    js: JS,
    python: PYTHON,
    ruby: RUBY,
    rust: RUST,
  };

  const logoStyles = {
    c: { title: "C", style: "bg-blue-600 text-white" },
    cpp: { title: "C++", style: "bg-blue-600 text-white" },
    csharp: { title: "C#", style: "bg-purple-500 text-white" },
    css: { title: "CSS", style: "bg-blue-400 text-white" },
    go: { title: "Go", style: "bg-teal-400 text-white" },
    html: { title: "HTML", style: "bg-orange-600 text-white" },
    java: { title: "Java", style: "bg-orange-500 text-white" },
    js: { title: "JavaScript", style: "bg-yellow-400 text-black" },
    python: { title: "Python", style: "bg-blue-800 text-yellow-300" },
    ruby: { title: "Ruby", style: "bg-red-700 text-white" },
    rust: { title: "Rust", style: "bg-amber-800 text-white" },
  };

  return (
    <div
      className={`min-w-8 max-w-8 min-h-8 max-h-8 justify-center items-center`}
    >
      <Image
        src={logoObj[language]}
        alt={language}
        objectFit="contain"
        draggable={false}
      />
    </div>
    // <div
    //   className={`rounded-full  px-3 py-1 text-sm font-bold ${logoStyles[language]?.style}`}
    // >
    //   <h1>{logoStyles[language]?.title}</h1>
    // </div>
  );
}
