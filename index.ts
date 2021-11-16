// @ts-ignore
import { serve } from "https://deno.land/x/sift@0.4.2/mod.ts";

const show_video = (show: boolean): string => {
  if (show) {
    return `<iframe width="560" height="315"
    src="https://www.youtube.com/embed/HtY3R9oL6OM"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>`;
  } else {
    return ""
  }
}

const page = (
  title: string, body: string, video: boolean
): Response =>
  new Response(`
<!DOCTYPE html>
<html lang="ja-JP">
  <head>
    <title>${title}</title>
    <meta charset="utf-8" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta
      name="description"
      content="で〜の"
    />
    <meta name="author" content="eggplants" />
    <meta
      name="keywords"
      content="deno,dev,github,で〜の,での,おねえさんみてみて,クレヨンしんちゃん"
    />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content="@egpl0" />
    <meta name="twitter:site" content="@egpl0" />
    <meta property="og:url" content="https://で〜の.deno.dev" />
    <meta
      property="og:image"
      content="https://deno.land/images/deno_paper.png"
    />
    <meta
      property="og:title"
      content="で〜の"
    />
    <meta
      name="og:description"
      content="de~no　deno🎶"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="shortcut icon"
      href="https://dash.deno.com/static/favicon.ico"
    />
  </head>
  <body>
    <main>
      <h1>${body}</h1>
      ${show_video(video)}
    </main>
  </body>
</html>
`.trim(), { "headers": { "content-type": "text/html; charset=utf-8" } }
  );


serve({
  "/": () => page("de~no deno", "おねえさんみてみて🎶", true),
  404: () => page("404", "404", false),
});
