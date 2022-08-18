import { Card, Col, Row } from "antd";
import React, { useState } from "react";

import genCard from "./genCard.tsx";

export default function Cardtools() {
  const websites = [
    {
      "url": "https://www.google.com/",
      "title": "Google ",
      "description": "Google 搜索  手气不错",
    },
    {
      "url": "https://www.github.com/",
      "title": "Github",
      "description": "Where the world builds software · GitHub",
    },
    {
      "url": "https://fanyi.youdao.com/",
      "title": "在线翻译_有道",
      "description": "免费、即时的多语种在线翻译",
    },

    {
      "url": "https://jsonv.hjkl01.cn/editor/",
      "title": "JSON Valid",
      "description": "Json视图",
    },
    {
      "url": "https://spidertools.cn/#/",
      "title": "工具箱",
      "description": "爬虫工具库",
    },
    {
      "url": "https://curl.hjkl01.cn/",
      "title": "curl to python",
      "description": "Convert curl commands to code",
    },
    { "url": "https://map.hjkl01.cn/", "title": "地图数据", "description": "fork" },
    {
      "url": "https://dber.hjkl01.cn/",
      "title": "Database design tool based on entity relation diagram",
      "description": "fork",
    },
    {
      "url": "https://drf.hjkl01.cn/",
      "title": "drf中文文档",
      "description": "fork",
    },
    {
      "url": "https://nginx.hjkl01.cn/",
      "title": "Nginx Online",
      "description": "配置高性能、安全、稳定的NGINX服务器的最简单方法。",
    },
  ];
  return genCard(websites);
}
