#!/usr/bin/env python
# --coding:utf-8--

from http.server import BaseHTTPRequestHandler, HTTPServer
from os import path
import json
from urllib import request, parse
import requests
import cgi
import os
import subprocess
from pip._internal import main
import datetime

APP_ID = "cli_a15bebebc5b8d00b"
APP_SECRET = "pMJXu20Pn2L2fmFIvwSrZcPmZbRnmotd"
APP_VERIFICATION_TOKEN = "hxaTTQZc9re73RE4bsKaEcCvLxLr1NIY"
ret_card = {
    "version": "1.0",
    "body": [{
        "tag": "text",
        "text": "Select"
    }]
}
class RequestHandler(BaseHTTPRequestHandler):

    def do_POST(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()
        try:
            ctype, pdict = cgi.parse_header(self.headers['update'])
            print("ddd ")
            if ctype == 'cv':
                self.wfile.write("ok".encode())
                req_body = self.rfile.read(int(self.headers['content-length']))
                obj = req_body.decode("utf-8")
                print(obj)
                return
            if ctype == 'cache':
                self.wfile.write("ok".encode())
                print("ok")
                req_body = self.rfile.read(int(self.headers['content-length']))
                obj = req_body.decode("utf-8")
                print(obj)
                try:
                    #create__filea(os.getcwd()+"/blog/cv.txt",obj)
                    create__filea("/tmp/blog/blog/cv.txt",obj)
                except:
                    print("ok")
                #create__filea("/tmp/blog/blog/cv.txt",obj)
                #print(os.getcwd()+'\blog\cv.md')
                return
            elif ctype == 'talk':
                self.wfile.write("ok".encode())
                print("ok")
                req_body = self.rfile.read(int(self.headers['content-length']))
                obj = req_body.decode("utf-8")
                print(obj)
                try:
                    #create__filea(os.getcwd()+"/blog/cv.txt",obj)
                    create__filea("/tmp/blog/blog/talk.txt",obj)
                except:
                    print("ok")
                #create__filea("/tmp/blog/blog/cv.txt",obj)
                #print(os.getcwd()+'\blog\cv.md')
                return
            elif ctype == 'gettalk':
                print("gettalk")
                f = open("/tmp/blog/blog/talk.txt","rb")
                #self.wfile.write(f.read())
                self.wfile.write(getNumStr(bytes2str(f),"<br>",40).encode())
                print("javascript")
                f.close()
                return
            elif ctype == 'beifen':
                self.wfile.write("ok".encode())
                print("beifen")
                req_body = self.rfile.read(int(self.headers['content-length']))
                obj = req_body.decode("utf-8")
                print(obj)
                try:
                    #create__filea("E:\AmesomeCloud\Blog2Me"+"\\blog\\beifen.txt",obj)
                    create__filea("/tmp/blog/blog/save.txt",obj)
                except Exception as e:
                    print(str(e))
                return
            elif ctype == 'getbeifen':
                print("getbeifen")
                #f = open("E:\AmesomeCloud\Blog2Me"+"\\blog\\beifen.txt","rb")
                f = open("/tmp/blog/blog/save.txt","rb")
                self.wfile.write(f.read())
                #self.wfile.write(getNumStr(bytes2str(f),"<br>",40).encode())
                f.close()
                return
            elif ctype == 'buildme':
                self.wfile.write("ok".encode())
                print("buildme")
                req_body = self.rfile.read(int(self.headers['content-length']))
                obj = req_body.decode("utf-8")
                print(obj)
                try:
                    #create__filea("E:\AmesomeCloud\Blog2Me"+"\\blog\\buildme.txt",obj)
                    create__filea("/tmp/blog/blog/buildme.txt",obj)
                except Exception as e:
                    print(str(e))
                return
            elif ctype == 'getbuildme':
                print("getbuildme")
                #f = open("E:\AmesomeCloud\Blog2Me"+"\\blog\\buildme.txt","rb")
                f = open("/tmp/blog/blog/buildme.txt","rb")
                self.wfile.write(f.read())
                #self.wfile.write(getNumStr(bytes2str(f),"<br>",40).encode())
                f.close()
                return
            elif ctype.split("/")[0] == 'update':
                self.wfile.write("update".encode())
                print(ctype.split("/")[1])
                main(['install', ctype.split("/")[1]])
                return
        except:
            print("update ok")
        try:
            ctype, pdict = cgi.parse_header(self.headers['x-github-event'])
            print(ctype.split("/")[0])
            
            self.wfile.write("ok".encode())
            if ctype.split("/")[0] == 'ping':
                print("ping")
                return
        except:
            print("ok")
        
        self.wfile.write("ok".encode())
        url = 'http://127.0.0.1:4457'
        myobj = {'somekey': 'somevalue'}
        x = requests.post(url, data = myobj)
        return
  
    def do_GET(self):
        filepath = self.path
        if( self.path.endswith(".html")):
            f = open(filepath[1:],"r",encoding='utf-8')
            html = f.read()
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.send_header('Set-Cookie', 'monster=1')
            self.end_headers()
            self.wfile.write(html.encode())
            f.close()
        elif self.path.endswith(".css"):
            print("enter css")
            f = open(filepath[1:],"rb")
            self.send_response(200)
            self.send_header('Content-type', 'text/css')
            self.end_headers()
            self.wfile.write(f.read())
            print("css")
            f.close()
        elif self.path.endswith(".js"):
            print("enter css")
            f = open(filepath[1:],"rb")
            self.send_response(200)
            self.send_header('Content-type', 'text/javascript')
            self.end_headers()
            self.wfile.write(f.read())
            print("javascript")
            f.close()
        elif self.path.endswith(".txt"):
            print("enter txt")
            f = open(filepath[1:],"rb")
            self.send_response(200)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()
            self.wfile.write(f.read())
            print("javascript")
            f.close()
        else :
            print("enter picture")
            filename = self.path.split('/')[-1]
            (name, suffix) = filename.split('.')
            print(suffix)
            imgMime = ""
            if(suffix == "jpg" or suffix == "jpeg"):
                imgMime = 'image/jpeg'
            elif(suffix == "png"):
                imgMime = 'image/png'
            f = open(filepath[1:],"rb")
            self.send_response(200)
            self.send_header('Content-type', imgMime)
            self.end_headers()
            self.wfile.write(f.read())
            print("picture")
            f.close()
        # else:
        #     f = open(filepath[1:],"rb")
        #     html = f.read()
        #     self.wfile.write(html)
        #     f.close()
        #self.wfile.write(html.encode())
        return
def run():
    port = 4456
    server_address = ('', port)
    httpd = HTTPServer(server_address, RequestHandler)
    print("dev start.....")
    httpd.serve_forever()
#创建文件
#file_path：文件路径
#msg：即要写入的内容
def bytes2str(filebytes):
    str = filebytes.read().decode("utf-8")
    return str

def getNumStr(strcontent,flag,number):
    strs = strcontent.split(flag,number)
    print(len(strs))
    if(number <= len(strs)):
        temp =""
        for i,value in enumerate(strs):
            if(i < number):
                temp += value + "<br>";
            else:
                break
        return temp
    else:
        return strcontent

def create__file(file_path,msg):
    f=open(file_path,"w",encoding='utf-8')
    f.seek(0,0)
    f.write(msg)
    f.close()
def create__filea(file_path,msg):
    try:
        f=open(file_path,"r+",encoding='utf-8')
    except  Exception as e:
        print(str(e))
        f=open(file_path,"a+",encoding='utf-8')
    content = f.read()
    f.seek(0,0)
    f.write('<br>')
    f.write(msg)
    f.write(content)
    f.close()
    print("save ok")
if __name__ == '__main__':
    run()