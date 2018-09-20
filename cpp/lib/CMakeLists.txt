project(lib)

include_directories(${CMAKE_CURRENT_SOURCE_DIR}/include)

add_library(
    lib
    SHARED
    ${CMAKE_CURRENT_SOURCE_DIR}/src/Foo.cxx
    ${CMAKE_CURRENT_SOURCE_DIR}/include/Foo.h
)
