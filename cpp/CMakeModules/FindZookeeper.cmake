cmake_minimum_required(VERSION 2.8)

include(FindPackageHandleStandardArgs)

find_library(ZOOKEEPER_LIBRARY /opt/zookeeper-3.4.12/src/c/include/zookeeper_mt)
find_path(ZOOKEEPER_INCLUDE_DIR "/opt/zookeeper-3.4.12/src/c/include/zookeeper.h")

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
