cmake_minimum_required(VERSION 2.8)

option(ENABLE_TESTS "Enable unit tests" ON)
option(ENABLE_ZOOKEEPER "Enable ZooKeeper Library" ON)

if(${CMAKE_SOURCE_DIR} STREQUAL ${CMAKE_BINARY_DIR})
    # Check if you're in the root directory of the project, and give an error.
    message(
        FATAL_ERROR
        "Please create a dedicated build directory for this load balancer. (You may need remove the CmakeCache.txt and the cache)"
    )
endif()

set(CMAKE_CXX_STANDARD 11)

if(ENABLE_ZOOKEEPER)

    set(
        CMAKE_MODULE_PATH ${CMAKE_MODULE_PATH}
        "${CMAKE_SOURCE_DIR}/CMakeModules/"
    )

    find_package(Zookeeper REQUIRED)

endif()

if(ENABLE_TESTS)

    enable_testing()
    add_subdirectory(tests)

endif()

add_subdirectory(lib)
add_subdirectory(bin)
