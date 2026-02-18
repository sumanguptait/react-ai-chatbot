import React from "react";

export function checkHeading(str) {
  return /^(\*)(\*)(.*)\*$/.test(str);
}
export function replaceHeadingStars(str) {
  return str.replace(/^(\*)(\*)|(\*)$/g, "");
}
//  other way to tell "hello"
