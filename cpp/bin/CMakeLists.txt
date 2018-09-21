project(main)

set(
    BIN_DIR_INCLUDE
    ${CMAKE_CURRENT_SOURCE_DIR}/include
)

set(
    BIN_DIR_SRC
    ${CMAKE_CURRENT_SOURCE_DIR}/src
)

include_directories(${BIN_DIR_INCLUDE})
include_directories(${CMAKE_SOURCE_DIR}/lib/include)
include_directories(${ZOOKEEPER_INCLUDE_DIR})

add_executable(
    main
    ${BIN_DIR_SRC}/Main.cxx
    ${BIN_DIR_SRC}/Rest.cxx
    ${BIN_DIR_INCLUDE}/Rest.h
    ${BIN_DIR_SRC}/UserInput.cxx
    ${BIN_DIR_INCLUDE}/UserInput.h
    ${BIN_DIR_SRC}/ZooKeeperManager.cxx
    ${BIN_DIR_INCLUDE}/ZooKeeperManager.h
)

target_link_libraries(main lib curl ${ZOOKEEPER_LIBRARIES})
