#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals
from datetime import date

AUTHOR = 'Python Korea'
SITENAME = 'Python Korea'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'Asia/Seoul'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 5

# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = True

STATIC_PATHS = ['images', ]

THEME           = 'themes/foundation'

INDEX_SAVE_AS = 'news/index.html'

PAGE_URL = '{pageurl}/'
PAGE_SAVE_AS = '{pageurl}/index.html'

ARTICLE_PATHS = ['news']
ARTICLE_URL = 'news/{date:%Y}/{slug}/'
ARTICLE_SAVE_AS = 'news/{date:%Y}/{slug}/index.html'

DATE_FORMATS = {
    'en': '%Y-%m-%d',
}

CURRENTYEAR = date.today().year
