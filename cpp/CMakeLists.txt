cmake_minimum_required(VERSION 2.8)

IF(${CMAKE_SOURCE_DIR} STREQUAL ${CMAKE_BINARY_DIR})
    # Check if you're in the root directory of the project, and give an error.
    MESSAGE(FATAL_ERROR "Please create a dedicated build directory for this load balancer. (You may need remove the CmakeCache.txt and the cache)")
ENDIF()

SET(CMAKE_CXX_STANDARD 11)

SET(CMAKE_MODULE_PATH ${CMAKE_MODULE_PATH} "${CMAKE_SOURCE_DIR}/CMakeModules/")
FIND_PACKAGE(Zookeeper REQUIRED)

OPTION(ENABLE_TESTS "Enable unit tests" ON)

IF(ENABLE_TESTS)
    ENABLE_TESTING()

    add_subdirectory(tests)
ENDIF()

add_subdirectory(examplelib)
add_subdirectory(examplebin)
