project(ExampleBin)

INCLUDE_DIRECTORIES(
    ${ZOOKEEPER_INCLUDE_DIR}
)

set (
    EXAMPLE_BIN_SRC
    ${CMAKE_CURRENT_SOURCE_DIR}/src/Main.cxx
)


include_directories(${CMAKE_SOURCE_DIR}/examplelib/include )
add_executable(ExampleBin ${EXAMPLE_BIN_SRC})

target_link_libraries(ExampleBin ExampleLib)
target_link_libraries(ExampleBin curl)
TARGET_LINK_LIBRARIES(
    ExampleBin
    ${ZOOKEEPER_LIBRARIES}
)
# target_link_libraries(ExampleBin ${CMAKE_SOURCE_DIR}/zookeeper-3.4.12/src/c)
