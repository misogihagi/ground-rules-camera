import font2base64 from "node-font2base64";
import nodeHtmlToImage from "node-html-to-image";

const _data = font2base64.encodeToDataUrlSync("./kssweetheavycalligraphy.ttf");

const texts = [
  "最ぜんをつくしたことをうたがわない",
  "原因のついきゅうはしても責任のついきゅうはしない",
  "言い訳自己べんごは不要",
  "せっきょく的にさんかすること",
  "ぎだいに集中する",
  "当事者いしきを持つ",
  "一人で話しすぎないこと",
  "人のはつげんをさえぎらない",
  "話してない人にも思いあり",
];

(async function () {
  for (var i = 0; i < texts.length; i++) {
    await nodeHtmlToImage({
      output: "./image" + (i + 1) + ".png",
      timeout: 1000 * 60 * 10,
      html: `<html>
    <head>
    <style>
      @font-face {
        font-family: "sweet heavy calligraphy";
        src: url("${_data}") format("truetype");
      }
      body {
        width: 640px;
        height: 360px;
        font-family: "sweet heavy calligraphy";
        margin: auto;
      }
      </style>
    </head>
    <body>
      <div style="width:100%; height:100%; display:flex; text-align: center; align-items: center; justify-content: center; font-size: calc(100vw / 10); background-color: #1A1A1A; color: F2F2F2">
        ${texts[i]}
      </div>
    </body>
  </html>
  `,
    });
  }
})();

