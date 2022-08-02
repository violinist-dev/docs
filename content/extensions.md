---
title: "Extensions in the update containers"
is_intro: true
date: 2018-03-25T10:50:02+02:00
anchor: "extensions"
weight:
---

Sometimes your project or a dependency actually requires a PHP extension. Since this is a requirement, your updates can then fail either upon installing your project, or when updating it. For this reason, it might be useful to know what extensions violinist has available when checking for updates in your project.
## PHP extensions available

This is the current output for the PHP 7.4 image of the command `php -m`:

```
$ php -m
[PHP Modules]
apcu
bcmath
bz2
calendar
Core
ctype
curl
date
dom
exif
fileinfo
filter
ftp
gd
hash
iconv
imagick
imap
intl
json
libxml
mbstring
memcached
mongodb
mysqli
mysqlnd
openssl
pcntl
pcre
PDO
pdo_mysql
pdo_pgsql
pdo_sqlite
Phar
posix
rdkafka
readline
redis
Reflection
session
SimpleXML
soap
sockets
sodium
SPL
sqlite3
standard
tokenizer
xml
xmlreader
xmlrpc
xmlwriter
xsl
Zend OPcache
zip
zlib

[Zend Modules]
Zend OPcache
```