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
paths = [
"buildthisworld",
"contact",
"zouze",
"piyue",
"onehour",
"feilong",
"outputk",
"topic_1",
"topic_2",
"topic_3",
"topic_4",
"topic_5",
"topic_6",
"topic_7",
"topic_8",
"topic_9",
"topic_10",
"topic_11",
"topic_12",
"topic_13",
"topic_14",
"topic_15",
"topic_16",
"topic_17",
"topic_18",
"topic_19",
"topic_20",
"topic_21",
"topic_22",
"topic_23",
"topic_24",
"topic_25",
"topic_26",
"topic_27",
"topic_28",
"topic_29",
"topic_30",
"topic_31",
"topic_32",
"topic_33",
"topic_34",
"topic_35",
"topic_36",
"topic_37",
"topic_38",
"topic_39",
"topic_40",
"topic_41",
"topic_42",
"topic_43",
"topic_44",
"people_01",
"people_02",
"people_03",
"people_04",
"people_05",
"people_06",
"people_07",
"people_08",
"thing_01",
"thing_02",
"thing_03",
"thing_04",
"thing_05",
"thing_06",
"thing_07",
"thing_08",
"thing_09",
"thing_10",
"factory_01",
"factory_02",
"factory_03",
"factory_04",
"factory_05",
"factory_06",
"factory_07",
"factory_08",
"factory_09",
"lifekiller_01",
"direction_01",
"direction_02",
"direction_03",
"direction_04",
"direction_05",
"direction_06",
"direction_07",
"direction_08",
"direction_09",
"direction_10",
"direction_11",
"developanel_01",
"developanel_02",
"developanel_03",
"developanel_04",
"developanel_05",
"developanel_06",
"developanel_07",
"developanel_08",
"developanel_09",
"developanel_10",
"developanel_11",
"developanel_12",
"developanel_13",
"developanel_14",
"daoyichun_01",
"daoyichun_02",
"daoyichun_03",
"daoyichun_04",
"daoyichun_05",
"daoyichun_06",
"daoyichun_07",
"daoyichun_08",
"log",
"thingcase_01",
"thingcase_02",
"thingcase_03",
"thingcase_04",
"thingcase_05",
"thingcase_06",
"thingcase_07",
"thingcase_08",
"thingcase_09",
"thingcase_10",
"thingcase_11",
"thingcase_12",
"templething_01",
"aroundview_01",
"government_02",
"government_03",
"government_04",
"government_05",
"government_06",
"government_07",
"government_08",
"government_09",
"government_10",
"government_11",
"government_12",
"government_13",
"government_14",
"government_15",
"government_16",
"viewtoview_01",
"viewtoview_02",
"viewtoview_03",
"viewtoview_04",
"viewtoview_05",
"viewtoview_06",
"viewtoview_07",
"viewtoview_08",
"viewtoview_09",
"viewtoview_10",
"viewtoview_11",
"viewtoview_12",
"viewtoview_13",
"viewtoview_14",
"debugtheworld_01",
"debugtheworld_02",
"debugtheworld_03",
"debugtheworld_04",
"debugtheworld_05",
"debugtheworld_06",
"debugtheworld_07",
"debugtheworld_08",
"debugtheworld_09",
"debugtheworld_10",
]
class RequestHandler(BaseHTTPRequestHandler):

    def do_POST(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()
        try:
            ctype, pdict = cgi.parse_header(self.headers['update'])
            print("ddd ")
            if ctype == 'cv':
                self.wfile.write("cv".encode())
                req_body = self.rfile.read(int(self.headers['content-length']))
                obj = req_body.decode("utf-8")
                print(obj)
                return
            if ctype == 'cache':
                self.wfile.write("cache".encode())
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
                return
            elif ctype == 'talk':
                self.wfile.write("talk".encode())
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
                self.wfile.write("beifen".encode())
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
                self.wfile.write("buildme".encode())
                print("buildme")
                req_body = self.rfile.read(int(self.headers['content-length']))
                obj = req_body.decode("utf-8")
                print(obj)
                try:
                    #create__filea("E:\AmesomeCloud\Blog2Me"+"\\blog\\buildme.txt",obj)
                    create__filea("/tmp/blog/blog/buildthisman.txt",obj)
                except Exception as e:
                    print(str(e))
                return
            elif ctype == 'getbuildme':
                print("getbuildme")
                #f = open("E:\AmesomeCloud\Blog2Me"+"\\blog\\buildme.txt","rb")
                f = open("/tmp/blog/blog/buildthisman.txt","rb")
                self.wfile.write(f.read())
                #self.wfile.write(getNumStr(bytes2str(f),"<br>",40).encode())
                f.close()
                return
            # elif ctype == 'buildthisworld':
            #     self.wfile.write("buildthisworld".encode())
            #     print("buildthisworld")
            #     req_body = self.rfile.read(int(self.headers['content-length']))
            #     obj = req_body.decode("utf-8")
            #     print(obj)
            #     try:
            #         #create__filea("E:\AmesomeCloud\Blog2Me"+"\\blog\\buildme.txt",obj)
            #         create__filea("/tmp/blog/blog/buildthisworld.txt",obj)
            #     except Exception as e:
            #         print(str(e))
            #     return
            # elif ctype == 'get'+'buildthisworld':
            #     print("getbuildthisworld")
            #     #f = open("E:\AmesomeCloud\Blog2Me"+"\\blog\\buildme.txt","rb")
            #     f = open("/tmp/blog/blog/buildthisworld.txt","rb")
            #     self.wfile.write(f.read())
            #     #self.wfile.write(getNumStr(bytes2str(f),"<br>",40).encode())
            #     f.close()
            #     return
            elif ctype.split("/")[0] == 'update':
                self.wfile.write("update".encode())
                print(ctype.split("/")[1])
                main(['install', ctype.split("/")[1]])
                return
            else:
                if(dealPost(self,ctype)):
                    return
        except:
            print("update notok")
        try:
            ctype, pdict = cgi.parse_header(self.headers['x-github-event'])
            print(ctype.split("/")[0])
            
            self.wfile.write("x-github-event".encode())
            if ctype.split("/")[0] == 'ping':
                print("ping")
                return
        except:
            print("ok")
        
        self.wfile.write("somekey".encode())
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

def dealPost(self,ctype):
    for path in paths:
        if(ctype == path):
            self.wfile.write(path.encode())
            print(path)
            req_body = self.rfile.read(int(self.headers['content-length']))
            obj = req_body.decode("utf-8")
            print(obj)
            try:
                #create__filea("E:\AmesomeCloud\Blog2Me"+"\\blog\\buildme.txt",obj)
                create__filea("/tmp/blog/blog/"+path+".txt",obj)
            except Exception as e:
                print(str(e))
            return True
        elif(ctype == 'get'+path):
            print(ctype)
            #f = open("E:\AmesomeCloud\Blog2Me"+"\\blog\\buildme.txt","rb")
            f = open("/tmp/blog/blog/"+path+".txt","rb")
            self.wfile.write(f.read())
            #self.wfile.write(getNumStr(bytes2str(f),"<br>",40).encode())
            f.close()
            return True
    return False
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