#!/usr/bin/env python
# --coding:utf-8--
import sys
#reload(sys)
#sys.setdefaultencoding('utf-8')
from http.server import BaseHTTPRequestHandler, HTTPServer
from os import path
import json
from urllib import request, parse
import os
import re
import time
import subprocess
import shutil
srcdir = ".\\book\\12"
tempdst = "..\\temp"
dstdir = ".\\yy"
if __name__ == '__main__':
    shutil.move(srcdir, tempdst)
    shutil.copytree(tempdst, dstdir)