# hva-alice-bootcamp
Software for Science Bootcamp assignment for C++/CMake and Nest.js.

## Nest.js
The Nest.js project is located in '/rest-api'.

The server uses a MySQL Database, so you have to edit the 'ormconfig.json' file.

To run the server:
```
npm run start
```

## C++
The C++ project is located in '/cpp'.

The project is mainly tested on CentOS 7.

The project requires two libraries:
- ZooKeeper 3.4.12
- Boost 1.53

To compile the project with CMake:
```
cd build
cmake ..
make
```

The 'cmake ..' commands contains some options:
- To disable ZooKeeper (you won't be able to build the 'bin' directory):
    - '-DENABLE_ZOOKEEPER=OFF'
- To disable unit tests:
    - '-DEENABLE_TESTS=OFF'

To run the project:
```
./bin/main'
```

To run the Foo unit test:
```
./tests/testFoo'
```
