from abc import ABC

import scrapy
from scrapy.crawler import CrawlerProcess
import pandas as pd

class DcSpider(scrapy.Spider, ABC):
    name = 'dc_spider'

    def start_requests(self):

        urls = ['https://www.datacamp.com/courses/all']

        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse_frontpage)

    def parse_frontpage(self, response):
        course_blocks = response.css('div.course-block')
        course_links = course_blocks.xpath('./a/@href')
        links_to_follow = course_links.extract()

        for url in links_to_follow:
            yield response.follow(url=url, callback=self.parse_pages)

    def parse_pages(self, response):
        # course title text
        # clean course title text
        # direct to chapter titles
        # clean chapter titles
        course_title = response.xpath('//h1[contains(@class, "title")]/text()')
        course_title_clean = course_title.extract_first().strip()
        ch_titles = response.css('h4.chapter__title::text')
        ch_titles_clean = [t.strip() for t in ch_titles.extract()]
        dc_dict[course_title_clean] = ch_titles_clean


dc_dict = dict()

process = CrawlerProcess()
process.crawl(DcSpider)
process.start()

print(dc_dict)

#dc_dict.to_csv('Scraped_data.csv')