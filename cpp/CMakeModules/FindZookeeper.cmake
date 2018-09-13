cmake_minimum_required(VERSION 2.8)

INCLUDE(FindPackageHandleStandardArgs)

FIND_LIBRARY(ZOOKEEPER_LIBRARY zookeeper_mt)
FIND_PATH(ZOOKEEPER_INCLUDE_DIR "zookeeper/zookeeper.h")

SET(ZOOKEEPER_LIBRARIES ${ZOOKEEPER_LIBRARY})

FIND_PACKAGE_HANDLE_STANDARD_ARGS(Zookeeper REQUIRED_ARGS ZOOKEEPER_INCLUDE_DIR ZOOKEEPER_LIBRARIES)
