#!/usr/bin/python

import sys
import pyperclip

def print_usage():
    print " "
    print "pyclip - Linus Lagerhjelm 2016"
    print " "
    print "Pyclip places the content of the specified file in your clipboard"
    print "Usage: pyclip <argument>"
    print "Where <argument> is a relative path to the file you wish to copy from"
    print " "

if __name__ == '__main__':
    
    #Because first argument of sys.argv is system reserved
    if len(sys.argv) != 2:
        print_usage()

    elif not sys.argv[1]:
        print_usage()

    else:
        try:
            fp = open(sys.argv[1]) #Read only is default
            fileContent = fp.readlines()
            fileContent = ''.join(fileContent)
            pyperclip.copy(fileContent)
            pyperclip.paste()
            fp.close()
        except IOError:
            print "Could not find file"
            print_usage()

