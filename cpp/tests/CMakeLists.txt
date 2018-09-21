PROJECT(tests)

include_directories(${CMAKE_SOURCE_DIR}/lib/include)

if(ENABLE_LATEST_BOOST)
    find_package(
        Boost 1.55
        COMPONENTS 
        unit_test_framework 
        REQUIRED
    )
else()
    find_package(
        Boost 1.53
        COMPONENTS 
        unit_test_framework 
        REQUIRED
    )
endif()

add_executable(testFoo ${CMAKE_CURRENT_SOURCE_DIR}/testFoo.cxx)

target_link_libraries(
    testFoo
    lib
    ${Boost_UNIT_TEST_FRAMEWORK_LIBRARY}
)

add_test(tests testFoo)
