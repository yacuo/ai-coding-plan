<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  exclude-result-prefixes="sitemap">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="zh-CN">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>XML 站点地图</title>
        <style>
          * { box-sizing: border-box; }
          body {
            margin: 0;
            padding: 2rem 1rem 3rem;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Microsoft YaHei", sans-serif;
            color: #1a1a1a;
            background: #fff;
            line-height: 1.5;
          }
          .wrap { max-width: 960px; margin: 0 auto; }
          h1 {
            margin: 0 0 1rem;
            font-size: 1.75rem;
            font-weight: 700;
          }
          .intro {
            margin: 0 0 1.5rem;
            color: #555;
            font-size: 0.95rem;
          }
          .count {
            margin: 0 0 1.25rem;
            font-size: 0.9rem;
            color: #666;
          }
          .table-scroll {
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
          table {
            width: max-content;
            min-width: 100%;
            border-collapse: collapse;
            font-size: 0.875rem;
          }
          th, td {
            border: 1px solid #ddd;
            padding: 0.65rem 0.75rem;
            text-align: left;
            vertical-align: middle;
            white-space: nowrap;
          }
          th {
            background: #f5f5f5;
            font-weight: 600;
          }
          td:last-child,
          th:last-child {
            width: 1%;
          }
          tr:nth-child(even) td { background: #fafafa; }
          a {
            color: #2563eb;
            text-decoration: none;
            white-space: nowrap;
          }
          a:hover { text-decoration: underline; }
          .muted { color: #888; white-space: nowrap; }
          @media (max-width: 640px) {
            body { padding: 1.25rem 0.75rem 2rem; }
            h1 { font-size: 1.35rem; }
            .intro, .count { font-size: 0.85rem; }
            th, td { padding: 0.5rem 0.65rem; font-size: 0.8125rem; }
          }
        </style>
      </head>
      <body>
        <div class="wrap">
          <h1>XML 站点地图</h1>
          <p class="intro">
            此 XML 站点地图由网站自动生成，便于搜索引擎发现与抓取本站页面。
            浏览器中显示的是人类可读视图；搜索引擎仍会读取原始 XML 数据。
          </p>
          <p class="count">
            此 XML 站点地图中的 URL 数：
            <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong>。
          </p>
          <div class="table-scroll">
          <table>
            <thead>
              <tr>
                <th>网址</th>
                <th>最后修改</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a href="{sitemap:loc}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td class="muted">
                    <xsl:choose>
                      <xsl:when test="sitemap:lastmod != ''">
                        <xsl:value-of select="sitemap:lastmod"/>
                      </xsl:when>
                      <xsl:otherwise>—</xsl:otherwise>
                    </xsl:choose>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
