# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 2.8

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:

# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list

# Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:
.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The program to use to edit the cache.
CMAKE_EDIT_COMMAND = /usr/bin/ccmake

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = "/media/sf_Shared/hva-cpp-bootcamp copy"

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = "/media/sf_Shared/hva-cpp-bootcamp copy/build/linux"

# Include any dependencies generated for this target.
include bin/CMakeFiles/main.dir/depend.make

# Include the progress variables for this target.
include bin/CMakeFiles/main.dir/progress.make

# Include the compile flags for this target's objects.
include bin/CMakeFiles/main.dir/flags.make

bin/CMakeFiles/main.dir/src/Main.cxx.o: bin/CMakeFiles/main.dir/flags.make
bin/CMakeFiles/main.dir/src/Main.cxx.o: ../../bin/src/Main.cxx
	$(CMAKE_COMMAND) -E cmake_progress_report "/media/sf_Shared/hva-cpp-bootcamp copy/build/linux/CMakeFiles" $(CMAKE_PROGRESS_1)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Building CXX object bin/CMakeFiles/main.dir/src/Main.cxx.o"
	cd "/media/sf_Shared/hva-cpp-bootcamp copy/build/linux/bin" && /usr/bin/c++   $(CXX_DEFINES) $(CXX_FLAGS) -o CMakeFiles/main.dir/src/Main.cxx.o -c "/media/sf_Shared/hva-cpp-bootcamp copy/bin/src/Main.cxx"

bin/CMakeFiles/main.dir/src/Main.cxx.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/main.dir/src/Main.cxx.i"
	cd "/media/sf_Shared/hva-cpp-bootcamp copy/build/linux/bin" && /usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -E "/media/sf_Shared/hva-cpp-bootcamp copy/bin/src/Main.cxx" > CMakeFiles/main.dir/src/Main.cxx.i

bin/CMakeFiles/main.dir/src/Main.cxx.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/main.dir/src/Main.cxx.s"
	cd "/media/sf_Shared/hva-cpp-bootcamp copy/build/linux/bin" && /usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -S "/media/sf_Shared/hva-cpp-bootcamp copy/bin/src/Main.cxx" -o CMakeFiles/main.dir/src/Main.cxx.s

bin/CMakeFiles/main.dir/src/Main.cxx.o.requires:
.PHONY : bin/CMakeFiles/main.dir/src/Main.cxx.o.requires

bin/CMakeFiles/main.dir/src/Main.cxx.o.provides: bin/CMakeFiles/main.dir/src/Main.cxx.o.requires
	$(MAKE) -f bin/CMakeFiles/main.dir/build.make bin/CMakeFiles/main.dir/src/Main.cxx.o.provides.build
.PHONY : bin/CMakeFiles/main.dir/src/Main.cxx.o.provides

bin/CMakeFiles/main.dir/src/Main.cxx.o.provides.build: bin/CMakeFiles/main.dir/src/Main.cxx.o

bin/CMakeFiles/main.dir/src/Rest.cxx.o: bin/CMakeFiles/main.dir/flags.make
bin/CMakeFiles/main.dir/src/Rest.cxx.o: ../../bin/src/Rest.cxx
	$(CMAKE_COMMAND) -E cmake_progress_report "/media/sf_Shared/hva-cpp-bootcamp copy/build/linux/CMakeFiles" $(CMAKE_PROGRESS_2)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Building CXX object bin/CMakeFiles/main.dir/src/Rest.cxx.o"
	cd "/media/sf_Shared/hva-cpp-bootcamp copy/build/linux/bin" && /usr/bin/c++   $(CXX_DEFINES) $(CXX_FLAGS) -o CMakeFiles/main.dir/src/Rest.cxx.o -c "/media/sf_Shared/hva-cpp-bootcamp copy/bin/src/Rest.cxx"

bin/CMakeFiles/main.dir/src/Rest.cxx.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/main.dir/src/Rest.cxx.i"
	cd "/media/sf_Shared/hva-cpp-bootcamp copy/build/linux/bin" && /usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -E "/media/sf_Shared/hva-cpp-bootcamp copy/bin/src/Rest.cxx" > CMakeFiles/main.dir/src/Rest.cxx.i

bin/CMakeFiles/main.dir/src/Rest.cxx.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/main.dir/src/Rest.cxx.s"
	cd "/media/sf_Shared/hva-cpp-bootcamp copy/build/linux/bin" && /usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -S "/media/sf_Shared/hva-cpp-bootcamp copy/bin/src/Rest.cxx" -o CMakeFiles/main.dir/src/Rest.cxx.s

bin/CMakeFiles/main.dir/src/Rest.cxx.o.requires:
.PHONY : bin/CMakeFiles/main.dir/src/Rest.cxx.o.requires

bin/CMakeFiles/main.dir/src/Rest.cxx.o.provides: bin/CMakeFiles/main.dir/src/Rest.cxx.o.requires
	$(MAKE) -f bin/CMakeFiles/main.dir/build.make bin/CMakeFiles/main.dir/src/Rest.cxx.o.provides.build
.PHONY : bin/CMakeFiles/main.dir/src/Rest.cxx.o.provides

bin/CMakeFiles/main.dir/src/Rest.cxx.o.provides.build: bin/CMakeFiles/main.dir/src/Rest.cxx.o

bin/CMakeFiles/main.dir/src/UserInput.cxx.o: bin/CMakeFiles/main.dir/flags.make
bin/CMakeFiles/main.dir/src/UserInput.cxx.o: ../../bin/src/UserInput.cxx
	$(CMAKE_COMMAND) -E cmake_progress_report "/media/sf_Shared/hva-cpp-bootcamp copy/build/linux/CMakeFiles" $(CMAKE_PROGRESS_3)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Building CXX object bin/CMakeFiles/main.dir/src/UserInput.cxx.o"
	cd "/media/sf_Shared/hva-cpp-bootcamp copy/build/linux/bin" && /usr/bin/c++   $(CXX_DEFINES) $(CXX_FLAGS) -o CMakeFiles/main.dir/src/UserInput.cxx.o -c "/media/sf_Shared/hva-cpp-bootcamp copy/bin/src/UserInput.cxx"

bin/CMakeFiles/main.dir/src/UserInput.cxx.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/main.dir/src/UserInput.cxx.i"
	cd "/media/sf_Shared/hva-cpp-bootcamp copy/build/linux/bin" && /usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -E "/media/sf_Shared/hva-cpp-bootcamp copy/bin/src/UserInput.cxx" > CMakeFiles/main.dir/src/UserInput.cxx.i

bin/CMakeFiles/main.dir/src/UserInput.cxx.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/main.dir/src/UserInput.cxx.s"
	cd "/media/sf_Shared/hva-cpp-bootcamp copy/build/linux/bin" && /usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -S "/media/sf_Shared/hva-cpp-bootcamp copy/bin/src/UserInput.cxx" -o CMakeFiles/main.dir/src/UserInput.cxx.s

bin/CMakeFiles/main.dir/src/UserInput.cxx.o.requires:
.PHONY : bin/CMakeFiles/main.dir/src/UserInput.cxx.o.requires

bin/CMakeFiles/main.dir/src/UserInput.cxx.o.provides: bin/CMakeFiles/main.dir/src/UserInput.cxx.o.requires
	$(MAKE) -f bin/CMakeFiles/main.dir/build.make bin/CMakeFiles/main.dir/src/UserInput.cxx.o.provides.build
.PHONY : bin/CMakeFiles/main.dir/src/UserInput.cxx.o.provides

bin/CMakeFiles/main.dir/src/UserInput.cxx.o.provides.build: bin/CMakeFiles/main.dir/src/UserInput.cxx.o

bin/CMakeFiles/main.dir/src/ZooKeeperManager.cxx.o: bin/CMakeFiles/main.dir/flags.make
bin/CMakeFiles/main.dir/src/ZooKeeperManager.cxx.o: ../../bin/src/ZooKeeperManager.cxx
	$(CMAKE_COMMAND) -E cmake_progress_report "/media/sf_Shared/hva-cpp-bootcamp copy/build/linux/CMakeFiles" $(CMAKE_PROGRESS_4)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Building CXX object bin/CMakeFiles/main.dir/src/ZooKeeperManager.cxx.o"
	cd "/media/sf_Shared/hva-cpp-bootcamp copy/build/linux/bin" && /usr/bin/c++   $(CXX_DEFINES) $(CXX_FLAGS) -o CMakeFiles/main.dir/src/ZooKeeperManager.cxx.o -c "/media/sf_Shared/hva-cpp-bootcamp copy/bin/src/ZooKeeperManager.cxx"

bin/CMakeFiles/main.dir/src/ZooKeeperManager.cxx.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/main.dir/src/ZooKeeperManager.cxx.i"
	cd "/media/sf_Shared/hva-cpp-bootcamp copy/build/linux/bin" && /usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -E "/media/sf_Shared/hva-cpp-bootcamp copy/bin/src/ZooKeeperManager.cxx" > CMakeFiles/main.dir/src/ZooKeeperManager.cxx.i

bin/CMakeFiles/main.dir/src/ZooKeeperManager.cxx.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/main.dir/src/ZooKeeperManager.cxx.s"
	cd "/media/sf_Shared/hva-cpp-bootcamp copy/build/linux/bin" && /usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -S "/media/sf_Shared/hva-cpp-bootcamp copy/bin/src/ZooKeeperManager.cxx" -o CMakeFiles/main.dir/src/ZooKeeperManager.cxx.s

bin/CMakeFiles/main.dir/src/ZooKeeperManager.cxx.o.requires:
.PHONY : bin/CMakeFiles/main.dir/src/ZooKeeperManager.cxx.o.requires

bin/CMakeFiles/main.dir/src/ZooKeeperManager.cxx.o.provides: bin/CMakeFiles/main.dir/src/ZooKeeperManager.cxx.o.requires
	$(MAKE) -f bin/CMakeFiles/main.dir/build.make bin/CMakeFiles/main.dir/src/ZooKeeperManager.cxx.o.provides.build
.PHONY : bin/CMakeFiles/main.dir/src/ZooKeeperManager.cxx.o.provides

bin/CMakeFiles/main.dir/src/ZooKeeperManager.cxx.o.provides.build: bin/CMakeFiles/main.dir/src/ZooKeeperManager.cxx.o

# Object files for target main
main_OBJECTS = \
"CMakeFiles/main.dir/src/Main.cxx.o" \
"CMakeFiles/main.dir/src/Rest.cxx.o" \
"CMakeFiles/main.dir/src/UserInput.cxx.o" \
"CMakeFiles/main.dir/src/ZooKeeperManager.cxx.o"

# External object files for target main
main_EXTERNAL_OBJECTS =

bin/main: bin/CMakeFiles/main.dir/src/Main.cxx.o
bin/main: bin/CMakeFiles/main.dir/src/Rest.cxx.o
bin/main: bin/CMakeFiles/main.dir/src/UserInput.cxx.o
bin/main: bin/CMakeFiles/main.dir/src/ZooKeeperManager.cxx.o
bin/main: bin/CMakeFiles/main.dir/build.make
bin/main: lib/liblib.so
bin/main: /usr/local/lib/libzookeeper_mt.so
bin/main: bin/CMakeFiles/main.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --red --bold "Linking CXX executable main"
	cd "/media/sf_Shared/hva-cpp-bootcamp copy/build/linux/bin" && $(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/main.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
bin/CMakeFiles/main.dir/build: bin/main
.PHONY : bin/CMakeFiles/main.dir/build

bin/CMakeFiles/main.dir/requires: bin/CMakeFiles/main.dir/src/Main.cxx.o.requires
bin/CMakeFiles/main.dir/requires: bin/CMakeFiles/main.dir/src/Rest.cxx.o.requires
bin/CMakeFiles/main.dir/requires: bin/CMakeFiles/main.dir/src/UserInput.cxx.o.requires
bin/CMakeFiles/main.dir/requires: bin/CMakeFiles/main.dir/src/ZooKeeperManager.cxx.o.requires
.PHONY : bin/CMakeFiles/main.dir/requires

bin/CMakeFiles/main.dir/clean:
	cd "/media/sf_Shared/hva-cpp-bootcamp copy/build/linux/bin" && $(CMAKE_COMMAND) -P CMakeFiles/main.dir/cmake_clean.cmake
.PHONY : bin/CMakeFiles/main.dir/clean

bin/CMakeFiles/main.dir/depend:
	cd "/media/sf_Shared/hva-cpp-bootcamp copy/build/linux" && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" "/media/sf_Shared/hva-cpp-bootcamp copy" "/media/sf_Shared/hva-cpp-bootcamp copy/bin" "/media/sf_Shared/hva-cpp-bootcamp copy/build/linux" "/media/sf_Shared/hva-cpp-bootcamp copy/build/linux/bin" "/media/sf_Shared/hva-cpp-bootcamp copy/build/linux/bin/CMakeFiles/main.dir/DependInfo.cmake" --color=$(COLOR)
.PHONY : bin/CMakeFiles/main.dir/depend
