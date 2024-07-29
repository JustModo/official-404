export const getLanguageFromExt = (ext) => {
  if (langObj.hasOwnProperty(ext)) {
    return langObj[ext];
  } else return "cpp";
};

const langObj = {
  c: "cpp",
  cpp: "cpp",
  cs: "csharp",
  css: "css",
  go: "go",
  html: "html",
  java: "java",
  js: "javascript",
  py: "python",
  rb: "ruby",
  rs: "rust",
};

export const examplefiledir = {
  "test1.py": `print("Hello, World!")`,
  "test2.c": `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
  folder1: {
    "test3.cpp": `#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,
    "test4.c": "content of test4.c",
    folder2: {
      "test5.c": "content of test5.c",
      "test6.c": "content of test6.c",
    },
  },
};
