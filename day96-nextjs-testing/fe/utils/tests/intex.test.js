import {
  cutTextToLength,
  slugify,
  extractArticleIdFromSlug,
  composeArticleSlug,
} from "../index";

const str = "The quick brown fox jumps over the lazy dog.";

describe("cutTextToLength", () => {
  it("should cut text to length", () => {
    expect(cutTextToLength(str, 20)).toBe("The quick brown fox ...");
  });

  it("should not cut text to length", () => {
    expect(cutTextToLength(str, 100)).toBe(str);
  });
});

const url = "[Hel^lo - My## =friend";

describe("slugify", () => {
  it("should cut text to length", () => {
    console.log(slugify(url));
    expect(slugify(url)).toBe("hello-my-friend");
  });
});

describe("composeArticleSlug", () => {
  it("should cut text to length", () => {
    console.log(composeArticleSlug(500, url));
    expect(composeArticleSlug(500, url)).toBe("hello-my-friend-500");
  });
});

const content = "new-best-500";

describe("extractArticleIdFromSlug", () => {
  it("should cut text to length", () => {
    console.log(extractArticleIdFromSlug(content));
    expect(extractArticleIdFromSlug(content)).toBe("500");
  });
});
