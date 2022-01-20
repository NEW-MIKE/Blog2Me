#!/usr/bin/env python
# --coding:utf-8--
import requests
import time,datetime

def run():
    while True:
        url1 = 'http://itknow.tk'
        url2 = 'http://esabeila.gq'
        try:
            x = requests.get(url1)
            print(x.status_code)
        except Exception as e:
            print(e)
            
        time.sleep(1)
        try:
            x = requests.get(url2)
        except Exception as e:
            print(e)
        print(x.status_code)
        time2 = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        print(time2+"   正常请求")
        time.sleep(600)

if __name__ == '__main__':
    run()