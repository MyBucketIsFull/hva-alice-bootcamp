cmake_minimum_required(VERSION 2.8)

option(ENABLE_TESTS "Enable unit tests" ON)

if(ENABLE_ZOOKEEPER)

    include(FindPackageHandleStandardArgs)

    find_library(ZOOKEEPER_LIBRARY zookeeper_mt)
    find_path(ZOOKEEPER_INCLUDE_DIR "zookeeper/zookeeper.h")

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

endif()
