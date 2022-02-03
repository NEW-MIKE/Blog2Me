from bottle import template
def WriteHtmlReport(htmlPath):    
    template_demo="""
    <html>
        <body>
            Hi {{Author}}
        </body>
    </html>
    """
    htmlTemp = template(template_demo, Author="sdy")
    with open(htmlPath, 'wb') as f:
        f.write(htmlTemp.encode('utf-8'))
WriteHtmlReport("E:\AmesomeCloud\Blog2Me\yy.html")