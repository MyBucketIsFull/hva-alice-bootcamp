#include <stdio.h>
#include "Rest.h"
#include "UserInput.h"
#include "ZooKeeperManager.h"

using namespace Rest;
using namespace UserInput;
using namespace ZooKeeperManager;

bool didNotExit = true;

void outputMessage(const char* message) {
    if (message[0] != '\0') {
        fprintf(stderr, "-- %s --\n", message);
    }
}

const char* terminateProgram() {
    didNotExit = false;
    return "Successfully terminated program!";
}

int main(int argc, char** argv) {
    initCurl();

    const char* message;

    while (didNotExit) {

        switch (getInput("What would you like to do?\n(1) Access Nest API.\n(2) Test ZooKeeper connectivity.\n(0) Exit.\n")) {
            case 1:
                enterRest();
                message = "";
                break;

            case 2:
                message = connect();
                break;

            case 0:
                message = terminateProgram();
                break;
        
            default:
                message = "";
                break;
        }

        outputMessage(message);

    }

    return 0;
}
