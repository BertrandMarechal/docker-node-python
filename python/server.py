#!/usr/bin/env python
 
from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse, parse_qs
import deskew_and_mrz

# HTTPRequestHandler class
class testHTTPServer_RequestHandler(BaseHTTPRequestHandler):
    # GET
    def do_GET(self):

        query_components = parse_qs(urlparse(self.path).query)
        try:
            imagename = query_components["image"]
            # Send response status code
            self.send_response(200)

            # Send headers
            self.send_header('Content-type','text/html')
            self.end_headers()

            # call image processing
            deskew_and_mrz.deskew_and_identify_mrz({"image": '/usr/src/app/data' + imagename, "output": '/usr/src/app/data' + imagename})

            # Write content as utf-8 data
            self.wfile.write(bytes(imagename[0], "utf8"))
            return
        except AttributeError:
            # Send response status code
            self.send_response(200)

            # Send headers
            self.send_header('Content-type','text/html')
            self.end_headers()

            # Send message back to client
            message = "Hello world!"
            # Write content as utf-8 data
            self.wfile.write(bytes(message, "utf8"))
            return
 
def run():
    print('starting server...')
    # Server settings
    # Choose port 8080, for port 80, which is normally used for a http server, you need root access
    server_address = ('0.0.0.0', 8081)
    # server_address = ('127.0.0.1', 8080)
    httpd = HTTPServer(server_address, testHTTPServer_RequestHandler)
    print('running server...')
    httpd.serve_forever()

run()