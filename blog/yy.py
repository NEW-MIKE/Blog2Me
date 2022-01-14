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
srcdir = ".\\book\\blog"
tempdst = "..\\temp"
pathTest = r"E:\AmesomeCloud\Blog2Me\blog\book"


#dstdir = ".\\yy"
if __name__ == '__main__':
    shutil.move(srcdir, tempdst)
    try:
        shutil.rmtree(pathTest)
    except OSError as e:
        print(e)
    else:
        print("The directory is deleted successfully")

    shutil.move(tempdst, srcdir)
    #shutil.copytree(tempdst, dstdir)