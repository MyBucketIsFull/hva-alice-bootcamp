cmake_minimum_required(VERSION 2.8)

include(FindPackageHandleStandardArgs)

include_directories(/opt/zookeeper-3.4.12/src/c/include/)
find_library(
    ZOOKEEPER_LIBRARY
    zookeeper_mt
    HINTS "/opt/zookeeper-3.4.12/src/c/include/")
find_path(ZOOKEEPER_INCLUDE_DIR "zookeeper.h")

set(
    ZOOKEEPER_LIBRARIES
    ${ZOOKEEPER_LIBRARY}
)

find_package_handle_standard_args(
    Zookeeper
    REQUIRED_ARGS
    ZOOKEEPER_INCLUDE_DIR
    ZOOKEEPER_LIBRARIES
)
