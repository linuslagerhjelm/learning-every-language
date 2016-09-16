#!/usr/bin/python

import os
import sys
import operator

ORIGIN = os.path.expanduser('~')
SIZES = {0: "B", 1: "kB", 2: "MB", 3: "GB", 4: "TB"}

def print_usage():
    print " "
    print "======================================================"
    print "Disk Scan - Linus Lagerhjelm 2016"
    print " "
    print "Disk Scan starts from the specified path and scans your file system"
    print "and listing files and folders that occupies the most space"
    print " "
    print "USAGE: diskscan <argument>"
    print "<arguments>"
    print "\t -h, -help \t - \t print this guide"
    print "\t filepath \t - \t spcify the root of the search (defaults to ~)"
    print " "
    print " "

def get_largest_unit(value):
    returnValue = value
    divCount = 0
    while float(returnValue)/1024 > 1:
        returnValue = float(returnValue)/1024
        divCount += 1
    return format(returnValue, '.2f')+SIZES[divCount]


def check_arguments():
    global ORIGIN
    if sys.argv[1] == "-h" or sys.argv[1] == "-help":
        print_usage()
    elif os.path.isdir(sys.argv[1]):
        ORIGIN = sys.argv[1]
    else:
        print_usage()
        os._exit(0)
        
if __name__ == '__main__':
    folders = {}

    if len(sys.argv) > 1:
        check_arguments()

    print "Scanning. This may take several minutes"
    print "Looking in folder: %s" % (ORIGIN)
    for root, dirs, files in os.walk(ORIGIN, topdown=False):
        if not dirs:
            folderSize = 0
            for currentFile in files:
                try:
                    folderSize += os.path.getsize(root+"/"+currentFile)
                    folders[folderSize] = root 
                    break
                except OSError:
                    exc_type, exc_value, exc_traceback = sys.exc_info()
                    #print traceback.print_exception(exc_type, exc_value, exc_traceback, limit=2, file=sys.stdout)
            

    sortedFolders = sorted(folders)
    extracted = sortedFolders[-100:]
    for key in extracted:
        print "%s \t-\t %s" % (get_largest_unit(key), folders[key]) 

